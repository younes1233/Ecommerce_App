import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ categories }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <nav className="bg-gray-900 text-white py-2" style={{ backgroundColor: '#232F3E' }}>
      <div className="container mx-auto flex justify-between items-center relative" style={{ backgroundColor: '#232F3E' }}>
        {/* Desktop navigation */}
        <div className="hidden lg:flex">
          {/* Navbar links */}
          <ul className="flex space-x-6">
            {/* Render category links */}
            {categories.map((category) => (
              <li
                key={category._id}
                onMouseEnter={() => handleCategoryHover(category)}
                onMouseLeave={handleCategoryLeave}
              >
                <Link
                  to={`/category/${category.slug}`}
                  className="text-sm font-medium hover:text-gray-300"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden block text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu} // Toggle mobile menu visibility
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16V5H4v1zM4 11h16V10H4v1zM4 16h16v-1H4v1z"
            />
          </svg>
        </button>

        {/* Display children categories on hover */}
        {hoveredCategory && (
          <div className="absolute bg-gray-900 text-white p-4 rounded-md top-full left-0 mt-2 shadow-lg">
            <h3 className="text-lg font-semibold">{hoveredCategory.name}</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              {hoveredCategory.children && // Check if children exist
                hoveredCategory.children.map((child) => (
                  <div key={child._id}>
                    <img src={child.image} alt={child.name} className="w-full h-auto" />
                    <p className="text-sm">{child.name}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="bg-gray-800">
              {/* Render category links */}
              {categories.map((category) => (
                <li key={category._id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
                    onClick={closeMobileMenu} // Close mobile menu when a category link is clicked
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
