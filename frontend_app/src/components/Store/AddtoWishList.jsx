import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';

const AddtoWishList = ({ product }) => {
//   const { items, setItems } = useStateContext();

//   const clickHandler = () => {
//     setItems(items + 1);
//     console.log(items);
//   };

  return (
    <Link
      to={`#`}
      className="inline-block w-9 h-9 bg-white shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-100 hover:border-gray-300 rounded-md transition duration-300"
     
    >
      {/* Cart Icon */}
      <FiHeart style={{ color: '#999', fontSize: '18px' }}/>
    </Link>
  );
};

export default AddtoWishList;
