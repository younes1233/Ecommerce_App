import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import AddtoCart from '../AddtoCart';
import AddtoWishList from '../AddtoWishList';
const ProductCard = ({ product }) => {
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  const isNewProduct = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // Subtract 7 days
    const createdAtDate = new Date(product.createdAt);
    return createdAtDate > oneWeekAgo;
  };

  return (
<div className="bg-white rounded-md overflow-hidden w-56 mx-4 my-2 relative flex flex-col border border-solid border-grey-400">
      {isNewProduct() && (
        <div className="bg-green-500 text-white text-xs font-bold rounded-full px-2 py-1 absolute top-2 left-2">New</div>
      )}
      <div className="text-gery-400 text-xs font-bold rounded-full px-2 py-1 absolute top-2 right-1"><AddtoWishList /></div>
      <Link to={`/product/${product.id}`} className="flex-grow">
        <div className="m-1 pb-3 bg-gray-50 overflow-hidden rounded-lg"> {/* Added div for image and rating with add to cart, with grey background and padding */}
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover object-center" /> {/* Adjusted height */}
          <div className="mt-2 flex justify-between items-center">
            <Rating rating={product.rating} />
            <AddtoCart />
          </div>
        </div>
        <div className="p-2 flex flex-col justify-between h-full"> {/* Adjusted padding and applied flexbox */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{truncateDescription(product.name, 20)}</h3> {/* Adjusted text size */}
            <p className="text-gray-600 mb-2">{truncateDescription(product.description, 70)}</p> {/* Adjusted text length */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-indigo-600">{product.price}</span> {/* Adjusted text size */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
