import React, { useState } from 'react';
import Header from '../../components/Store/Header';
import Footer from '../../components/Store/Footer';

const Checkout = () => {
    const [shippingMethod, setShippingMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleShippingChange = (e) => {
        setShippingMethod(e.target.value);
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Shipping Address */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input type="text" id="fullName" name="fullName" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                                <input type="text" id="address" name="address" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                                <input type="text" id="city" name="city" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                            </div>
                            {/* Add more address fields as needed */}
                        </form>
                    </div>
                    {/* Payment Info */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Payment Info</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">Card Number</label>
                                <input type="text" id="cardNumber" name="cardNumber" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                                <input type="text" id="expiryDate" name="expiryDate" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">CVV</label>
                                <input type="text" id="cvv" name="cvv" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                            </div>
                            {/* Add more payment fields as needed */}
                        </form>
                    </div>
                </div>
                {/* Shipping Method */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
                    <div className="flex items-center mb-4">
                        <input type="radio" id="standard" name="shippingMethod" value="standard" checked={shippingMethod === 'standard'} onChange={handleShippingChange} />
                        <label htmlFor="standard" className="ml-2">Standard Shipping ($5.00)</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="radio" id="express" name="shippingMethod" value="express" checked={shippingMethod === 'express'} onChange={handleShippingChange} />
                        <label htmlFor="express" className="ml-2">Express Shipping ($10.00)</label>
                    </div>
                </div>
                {/* Payment Method */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    <div className="flex items-center mb-4">
                        <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={handlePaymentChange} />
                        <label htmlFor="creditCard" className="ml-2">Credit Card</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="radio" id="paypal" name="paymentMethod" value="paypal" checked={paymentMethod === 'paypal'} onChange={handlePaymentChange} />
                        <label htmlFor="paypal" className="ml-2">PayPal</label>
                    </div>
                </div>
                {/* Order Summary */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="bg-gray-100 p-4 rounded-md">
                        {/* Display list of items in the cart */}
                        {/* For each item, display name, price, and quantity */}
                        <div className="flex justify-between mb-2">
                            <p>Product 1</p>
                            <p>$10.99</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Product 2</p>
                            <p>$15.99</p>
                        </div>
                        {/* Add more items as needed */}
                        <div className="border-b border-gray-300 my-2"></div>
                        {/* Display subtotal */}
                        <div className="flex justify-between mb-2">
                            <p>Subtotal</p>
                            <p>$26.98</p>
                        </div>
                        {/* Add shipping cost, taxes, etc. */}
                        <div className="flex justify-between mb-2">
                            <p>Shipping</p>
                            <p>$5.00</p>
                        </div>
                        {/* Add tax */}
                        <div className="flex justify-between mb-2">
                            <p>Tax (5%)</p>
                            <p>$1.35</p>
                        </div>
                        {/* Total amount */}
                        <div className="flex justify-between font-semibold">
                            <p>Total</p>
                            <p>$33.33</p>
                        </div>
                    </div>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md mt-8 transition duration-300">Place Order</button>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
