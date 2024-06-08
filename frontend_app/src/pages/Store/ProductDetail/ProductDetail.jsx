import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Store/Header';
import Footer from '../../../components/Store/Footer';
import ProductSlider from '../../../components/Store/Product/ProductSlider';
import Rating from '../../../components/Store/Product/Rating';
import Navbar from '../../../components/Store/Navbar';
import ReactImageMagnify from 'react-image-magnify';
import AddtoCart from '../../../components/Store/AddtoCart';
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/category/${product?.category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch related products');
        }
        const data = await response.json();
        setRelatedProducts(data);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    if (product) {
      fetchRelatedProducts();
    }
  }, [product]);

  return (
    <>
      <Header />
      <Navbar categories={categories} />
      <div className="container mx-auto mt-10 px-4">
        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Use React Image Magnify for zoom functionality */}
              <ReactImageMagnify {...{
                smallImage: {
                  alt: product.name,
                  isFluidWidth: true,
                  src: product.image,
                },
                largeImage: {
                  src: product.image,
                  width: 1200,
                  height: 1800,
                },
                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
              }} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-700 mb-4">Was:   ${product.price}</p>
              <p className="text-gray-700 mb-4">Now:   {product.price - (product.price * product.discount)}</p>
              <p className="text-gray-700 mb-4">Category: {product.category}</p>
              <p className="text-gray-700 mb-4">
                Created At: {new Date(product.createdAt).toLocaleDateString()}
                <Rating rating={product.rating} />
              </p>

             <AddtoCart />
            </div>
          </div>
        )}
      </div>
      {product && (
        <ProductSlider title="Related Products" products={relatedProducts} />
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
