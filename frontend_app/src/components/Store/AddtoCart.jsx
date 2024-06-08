import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import SideCart from './SideCart';
const AddtoCart = ({ product }) => {
  const { items, setItems,showSideCart, setShowSideCart } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = () => {
    setIsLoading(true);
    setShowSideCart(true);
    console.log(showSideCart);
    // Simulate an API call or some asynchronous action
    setTimeout(() => {
      setItems(items + 1);
      setIsLoading(false);
    }, 1000); // Change the duration as needed
    
  };

  return (
    <>
    <Link
      to={`#`}
      className="mr-1 inline-block w-9 h-9 bg-white shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:border-gray-300 rounded-md transition duration-300 relative "
      onClick={clickHandler}
    >
      {/* Cart Icon */}
      {isLoading ? (
        // Render loading animation
        <div className="absolute inset-0 flex items-center justify-center">
          <AiOutlineLoading3Quarters className="animate-spin text-gray-600" size={20} />
        </div>
      ) : (
        // Render cart icon
        <FiShoppingCart className="text-gray-600" size={20} />
      )}
    </Link>
    </>
  );
};

export default AddtoCart;
