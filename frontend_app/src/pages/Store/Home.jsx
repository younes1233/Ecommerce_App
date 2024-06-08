import React from 'react';
import Header from '../../components/Store/Header';
import Navbar from '../../components/Store/Navbar';
import { useState, useEffect } from 'react';
import CategoryBanner from '../../components/Store/CategoryBanner'; 
import ProductList from '../../components/Store/Product/ProductList'; 
import ProductSlider from '../../components/Store/Product/ProductSlider';
import Footer from '../../components/Store/Footer';
import SideCart from '../../components/Store/SideCart';
import { useStateContext } from '../../contexts/ContextProvider';
const Home = () => {
  const [products, setProducts] = useState([]);
  const {showSideCart, setShowSideCart} = useStateContext();

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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

  return (
    <>
    < Header />
    < Navbar categories={categories}/>
    {showSideCart && <SideCart />}
    <div className="bg-gray-100">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Welcome to Our E-commerce Store
          </h1>
          <p className="text-lg md:text-xl mb-12">
            Explore our wide range of products and find the perfect items for you.
          </p>
          <button className="bg-white text-indigo-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-100 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>
     
      <ProductSlider title="Featured Products" products={products} />
      <CategoryBanner />
      <ProductSlider title="Latest Products" products={products} />
      <ProductSlider title="Best Seller" products={products} />
      <CategoryBanner />
      <ProductSlider title="On Sales" products={products} />
      {/* <ProductList /> */}
    </div>
    <Footer />
    </>
  );
};

export default Home;
