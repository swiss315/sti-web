import React, { useState } from "react";
import '../stylesheets/starrating.css'

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <div
              key={index}
              className={`buttonstar ${index <= (hover || rating) ? "on" : "off"}`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </div>
          );
        })}
      </div>
    );
  };

  export default StarRating;