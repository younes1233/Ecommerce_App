import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Shop</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Categories</a></li>
              <li><a href="#" className="hover:text-gray-300">Products</a></li>
              <li><a href="#" className="hover:text-gray-300">Deals</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul>
              <li>Email: info@example.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer