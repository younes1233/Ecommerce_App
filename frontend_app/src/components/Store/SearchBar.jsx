import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (!query.trim()) {  
      setSearchResults([]);
      return;
    }

    try {
      setLoading(true);
      console.log(query);
      const response = await fetch(`http://localhost:3000/products/search?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-96 md:w-96 border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:border-indigo-500 text-black"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className="absolute right-0 top-0 h-full px-4">
        <div className='text-black'>
          <FiSearch />
        </div>
      </button>
      <div className="mt-1">
        {loading && <p className="text-gray-500"></p>}
        {!loading && searchResults.length > 0 && (
          <div className="absolute top-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 w-full z-10 p-4 text-gray-600">
            <h3 className="text-1xl font-semibold mb-2">Search Results</h3>
            <ul>
              {searchResults.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className="flex items-center">
                  <div className="flex items-center"> {/* Container for image and name */}
                    <img src={product.image} alt={product.name} className="w-9 h-9 mr-4 object-cover rounded-full p-1" />
                    <li className="text-sm">{product.name}</li>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        )}
        {!loading && searchResults.length === 0 && searchQuery.trim() && (
          <p className="absolute top-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 w-full z-10 p-4 text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
