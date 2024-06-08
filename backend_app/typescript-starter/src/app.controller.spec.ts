import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  ProductsController } from 'products/products.controller';
import  {ProductsService} from 'products/products.service'
describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, ProductsController],
      providers: [AppService, ProductsService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(ProductsController);
      expect(appController.findAll());
    });
  });
  
  describe('getProducts', () => {
    console.log("products cont is running");
    it('should return "products"', () => {
      const productsController = app.get(ProductsController);
      expect(productsController.findAll());
    });
  });
});
