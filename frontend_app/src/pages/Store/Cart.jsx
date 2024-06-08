import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import Header from '../../components/Store/Header';
import Footer from '../../components/Store/Footer';
import { HiShoppingCart } from 'react-icons/hi'; // Importing modern basket icon

const Cart = () => {
    const { items, setItems } = useStateContext(); // Access items state from context

    // Placeholder products for testing
    const placeholderProducts = [
        {
            id: 1,
            name: "Product 1",
            price: 10,
            quantity: 1,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Product 2",
            price: 15,
            quantity: 2,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Product 3",
            price: 20,
            quantity: 1,
            image: "https://via.placeholder.com/150",
        },
    ];

    // Function to calculate subtotal based on cart items
    const calculateSubtotal = () => {
        // Example calculation using placeholder products
        return placeholderProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    };

    // Function to calculate total based on cart items
    const calculateTotal = () => {
        // Example calculation using placeholder products
        return calculateSubtotal(); // For now, total is the same as subtotal
    };

    return (
        <>
            <Header />
            <div className="container mx-auto mb-20 px-4 py-8">
                <h1 className="text-2xl font-semibold mb-6">
                    Cart <span className="text-sm font-normal text-gray-500">({items} {items > 1 ? 'items' : 'item'})</span>
                </h1>
                {items === 0 ? (
                    <div className="text-center">
                        <HiShoppingCart className="text-7xl text-gray-400 mb-4 mx-auto" /> {/* Modern basket icon */}
                        <p className="text-gray-700 text-3xl mb-4 font-semibold">Your shopping basket is empty.</p>
                        <p className="text-gray-600 text-lg mb-8">What are you waiting for?</p>
                        <Link to="/" className="inline-block bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white py-3 px-12 rounded transition duration-300 ">
                            Go shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left container for cart items */}
                        <div className="md:col-span-1">
                            {/* Displaying all placeholder products */}
                            {placeholderProducts.map(product => (
                                <div key={product.id} className="border border-gray-200 p-4 mb-4 flex items-center">
                                    <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                                    <div>
                                        <p className="text-lg font-semibold">{product.name}</p>
                                        <p className="text-gray-600">${product.price} x {product.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Right container for subtotal, total, and checkout button */}
                        <div className="md:col-span-1">
                            {/* Subtotal */}
                            <div className="border-b border-gray-200 pb-4 mb-4">
                                <p className="text-xl font-semibold mb-2">Subtotal</p>
                                <p className="text-lg">${calculateSubtotal()}</p>
                            </div>
                            {/* Total */}
                            <div className="border-b border-gray-200 pb-4 mb-4">
                                <p className="text-xl font-semibold mb-2">Total</p>
                                <p className="text-3xl">${calculateTotal()}</p>
                            </div>
                            {/* Checkout button */}
                            <Link to={'/checkout'} className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white py-3 px-12 rounded transition duration-300 ">
                                Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
