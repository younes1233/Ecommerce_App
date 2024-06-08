import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import ShoppingCart from './ShoppingCart';
import UserIcon from './UserIcon';
import SearchBar from './SearchBar';
import { FaShoppingCart } from 'react-icons/fa';
import { useStateContext } from '../../contexts/ContextProvider';
import Auth from './User/Auth';

const Header = () => {
  const { items, setItems, showAuth, setShowAuth } = useStateContext();

  const toggleAuth = () => {
    setShowAuth(!showAuth);
  };

  const handleUserIconClick = (e) => {
    // Prevent click event propagation to parent components
    e.stopPropagation();
  };

  return (
    <>
      <header className="bg-gray-900 text-white shadow-md py-3">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <div className="logo-container">
              <span className="logo-text">EasyBuy</span>
              {/* <FaShoppingCart className="icon" size={24} color="blue" /> */}
            </div>
          </Link>
          <SearchBar />
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {/* User */}
            <div onClick={toggleAuth}> {/* Ensure onClick event doesn't propagate */}
              <UserIcon className="h-8 w-8 cursor-pointer" onClick={handleUserIconClick} />
            </div>
            { showAuth && <Auth />}
            {/* Basket */}
            <Link to="/cart" className="relative inline-block">
              <ShoppingCart itemCount={items} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
