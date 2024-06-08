const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300">
         {/* Newsletter section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-12">Stay updated with our latest products and offers.</p>
          <form className="flex flex-col md:flex-row max-w-md mx-auto">
            <input
              type="email"
              className="bg-white text-gray-800 rounded-l-full px-6 py-3 mb-4 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white rounded-r-full px-8 py-3 hover:bg-indigo-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
        {/* <div className="bg-gray-900 py-4 text-center">
          <p className="text-gray-400">&copy; 2024 Your Ecommerce. All rights reserved.</p>
        </div> */}
      </footer>
    );
  };
  
  export default Footer;
  