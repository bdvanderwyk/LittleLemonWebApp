import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <h3>{review.reviewerName}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
