import React, { useState, useEffect } from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';

const Auth = () => {
    const { showAuth, setShowAuth } = useStateContext();

    const [isSignup, setIsSignup] = useState(false);
    const handleSwitch = () => {
        setIsSignup(!isSignup);
    };

    const handleRemoveBtn = (event) => {
        setShowAuth(!showAuth);
    };

    return (
        <div className=" text-gray-700 fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50 ml-0">
            <div className="bg-white shadow-md rounded-md p-8 relative">
                <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900"
                    onClick={handleRemoveBtn}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-semibold mb-4">Hala! Let's get started</h2>
                <p className="text-center mt-4">{isSignup ? 'Already have an account?' : 'Don\'t have an account?'} <span className="text-indigo-600 cursor-pointer" onClick={handleSwitch}>{isSignup ? 'Sign in' : 'Sign up'}</span></p>

                <form>
                    {isSignup && (
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                            <input type="text" id="fullName" name="fullName" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input type="password" id="password" name="password" className="border-gray-300 border rounded-md py-2 px-4 w-full" />
                    </div>
                    {/* Remember Me */}
                    <div className="flex items-center justify-between mb-4">
                        <label htmlFor="remember" className="text-gray-700">
                            <input type="checkbox" id="remember" name="remember" className="mr-2" />
                            Remember Me
                        </label>
                        <a href="#" className="text-indigo-600 hover:underline">Forgot Your Password?</a>
                    </div>
                    {/* Sign In with Facebook */}
                   {!isSignup && <button type="button" className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md mt-4 transition duration-300 w-full">
                        Sign In with Facebook
                    </button>}
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md mt-4 transition duration-300 w-full">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
