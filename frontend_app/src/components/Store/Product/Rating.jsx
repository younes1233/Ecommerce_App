const Rating = ({ rating }) => {
  const renderStars = () => {
    return (
      <div className="flex items-center pl-2">
        <div className="bg-white rounded-full px-5 py-0 flex items-center"> {/* Container with white background and rounded left side */}
          <span className="text-black">{rating}</span> {/* Display rating in black */}
          <SmallStar /> {/* Display small star */}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderStars()}
    </div>
  );
};

const SmallStar = () => {
  return (
    <svg className="h-3 w-3 fill-current text-#82AE04 ml-1" viewBox="0 0 20 20"> {/* Update fill color to #82AE04 */}
      <path fill="#82AE04" d="M10 0l2.938 6.463L20 7.25l-5 4.837 1.482 7.29L10 15.25 4.518 19.376 6 12.538l-5-4.837L7.062 6.463z" />
    </svg>
  );
};

export default Rating;
