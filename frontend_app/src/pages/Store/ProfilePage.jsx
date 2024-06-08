import React from 'react';

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 object-cover rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
          />
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-xl font-semibold">John Doe</h1>
          <p className="mt-2 text-sm text-gray-600">johndoe@example.com</p>
          <p className="mt-1 text-sm text-gray-500">Joined on January 1, 2023</p>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
          <p className="text-sm text-gray-600">
            123 Main Street, Apt 101 <br />
            City, State ZIP <br />
            Country
          </p>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold mb-4">Order History</h2>
          <ul className="text-sm text-gray-600">
            <li className="mb-2">
              Order #1234 - Total: $50 - Placed on January 10, 2024
            </li>
            <li className="mb-2">
              Order #5678 - Total: $100 - Placed on February 5, 2024
            </li>
            <li className="mb-2">
              Order #91011 - Total: $75 - Placed on March 20, 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
