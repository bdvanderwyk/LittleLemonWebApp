import React from 'react';
import ReviewList from './ReviewList';
import './Reviews.css';

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
  <>
    <h1 className='testhead'>Customer Reviews</h1>
    <div className="testsection">
      <div className='review-list-container '>
      <ReviewList reviews={reviews} />
      </div>
    </div>
  </>
  );
};

export default Reviews;
