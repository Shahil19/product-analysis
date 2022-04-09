import React from 'react';


const Review = (props) => {
    const { name, comment, ratting } = props.review;
    console.log(props);
    return (
        <div className=' border-2 border-gray-400 rounded-lg p-4'>
            <h3 className='text-2xl'>{name}</h3>
            <p className='text-xl text-red-700'>{comment}</p>
            <p>Ratings: {ratting}</p>
        </div>
    );
};

export default Review;