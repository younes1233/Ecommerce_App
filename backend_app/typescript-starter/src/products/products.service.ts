// products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async searchProducts(query: string): Promise<Product[]> {
    if (!query) {
      return [];
    }

    try {
      const regex = new RegExp(query, 'i'); // 'i' for case-insensitive search
      const products = await this.productModel.find({ name: { $regex: regex } }).exec();
      return products;
    } catch (error) {
      // Handle error appropriately
      console.error('Error searching products:', error);
      return [];
    }
  }

  async findByCategory(category: string): Promise<Product[]> {
    const products = await this.productModel.find({ category }).exec();
    if (!products || products.length === 0) {
      throw new NotFoundException('Products not found in the specified category');
    }
    return products;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findOne({id}).exec();
    if (!product) {
      throw new NotFoundException('Product no found');
    }
    return product;
  }

  async create(productData: Product): Promise<Product> {
    const createdProduct = new this.productModel(productData);
    return createdProduct.save();
  }
}
