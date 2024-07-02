import React from "react";

const SearchResult = ({ result }) => {
  if (!result) {
    return null;
  }

  const { _id, name, cuisine, address, rating, reviews, image, openingTime, closingTime } = result;

  return (
    <div className="search-result">
      <div className="result-content">
        <p className="result-title">
          {_id}. {name} - {cuisine} Cuisine
        </p>
        <p className="result-sub">
          Address: {address} | Rating: {rating} | Reviews: {reviews} | 
          Opening Time: {openingTime} | Closing Time: {closingTime}
        </p>
        <img src={image} alt={name} className="result-image" />
      </div>
    </div>
  );
};

export default SearchResult;
