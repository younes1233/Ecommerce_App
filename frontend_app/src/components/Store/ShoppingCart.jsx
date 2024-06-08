import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const ShoppingCart = ({ itemCount }) => {
  return (
    <div className="flex items-center  transition duration-300 ease-in-out transform hover:scale-110">
      <span className="hidden md:inline  text-sm">Cart</span>
      <div className="relative ml-2">
        <FiShoppingCart className="text-2xl" />
        {itemCount >= 0 && (
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
            {itemCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
