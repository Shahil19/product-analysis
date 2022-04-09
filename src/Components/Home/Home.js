import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeReviews from '../HomeReviews/HomeReviews';

const Home = () => {
    const navigate = useNavigate()

    const goToReviewPage = () => {
        const URL = '/reviews';
        navigate(URL)
    }

    // review data
    /* const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []) */

    // console.log(reviews);





    return (
        <div>
            <div className='grid grid-cols-2 gap-5 mx-8 mt-10'>
                <div className="home-text-container my-auto">
                    <h1 className='text-5xl font-bold font-mono'>Welcome To <span className='text-orange-600 font-serif'>FOODIFY</span> World</h1>
                    <p className='text-xl mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, qui ipsam similique cumque quidem ipsa perspiciatis aliquid quasi dolores, fugiat ipsum nulla magnam, cum beatae in? A repellat quos labore.</p>
                </div>
                <div className="w-full">
                    <img src="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg" alt="" />
                </div>
            </div>
            <div className='m-12'></div>
            {
                <HomeReviews></HomeReviews>
            }
            <div className='mt-10 flex justify-center'>
                <button onClick={goToReviewPage} className='mx-auto py-2 px-3 text-white bg-purple-600 rounded-md '>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;