import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='mt-3'>
            <h1 className='text-4xl font-semibold text-center'>
                Customer Reviews
            </h1>
            <div className=' grid grid-cols-3 gap-4 mt-9 mx-6 bg-gray-100'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;