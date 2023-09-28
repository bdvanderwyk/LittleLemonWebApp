import React from 'react';
import ReviewList from './ReviewList';

const Reviews = () => {
  const reviews = [
    {
      reviewerName: 'Audrey',
      rating: 5,
      content: 'Best hummus in town.',
    },
    {
      reviewerName: 'Wren',
      rating: 4,
      content: 'I will be back.',
    },
    {
        reviewerName: 'Jade',
        rating: 5,
        content: 'Excellent food and service!',
      },
      {
        reviewerName: 'Bob',
        rating: 4,
        content: 'I enjoyed the experience.',
      }
  ];

  return (
    <div className="app">
      <h1>Customer Reviews</h1>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Reviews;
