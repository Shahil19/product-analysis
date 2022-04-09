import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const HomeReviews = () => {
    const [reviews, setReviews] = useReviews();
    let homeReviews = reviews.slice(0, 3);
    console.log(homeReviews);
    return (
        <div className=' grid grid-cols-3 gap-4 mt-9 mx-6 bg-gray-100'>
            {
                homeReviews.map(review => <Review key={review.id} review={review} ></Review>)
            }
        </div>
    );
};

export default HomeReviews;