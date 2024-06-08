import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { Link } from 'react-router-dom';

const SideCart = () => {
    const { setShowSideCart, showSideCart } = useStateContext();

    const closeBar = () => {
        setShowSideCart(!showSideCart);
    };

    const products = [
        { id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/50' },
        { id: 3, name: 'Product 3', price: '$39.99', image: 'https://via.placeholder.com/50' },
        { id: 4, name: 'Product 4', price: '$49.99', image: 'https://via.placeholder.com/50' },
        { id: 5, name: 'Product 5', price: '$59.99', image: 'https://via.placeholder.com/50' },
    ];

    return (
        <>
            {showSideCart && (
                <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-md z-50 p-4 transition-transform duration-300 transform translate-x-0">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Your Cart</h2>
                        <button className="text-gray-500 hover:text-gray-700" onClick={closeBar}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-4">
                        {products.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty</p>
                        ) : (
                            <ul>
                                {products.map((product) => (
                                    <li key={product.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                                        <img src={product.image} alt={product.name} className="w-10 h-10 object-cover" />
                                        <p className="ml-2">{product.name}</p>
                                        <p className="text-gray-500">{product.price}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <Link to={'/checkout'} >
                        <button className="bg-indigo-600 text-white py-2 px-4 mt-4 w-full rounded-md hover:bg-indigo-700 transition duration-300">
                            Checkout
                        </button>
                    </Link>
                </div>
            )}
            {showSideCart && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={closeBar}></div>}
        </>
    );
};

export default SideCart;
