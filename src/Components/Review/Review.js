import React from 'react';


const Review = (props) => {
    const { name, comment, ratting } = props.review;
    return (
        <div className=' border-2 border-gray-400 rounded-lg p-4'>
            <h3 className='text-2xl'>{name}</h3>
            <p className='text-xl'>{comment}</p>
            <p>Rattings: {ratting}</p>
        </div>
    );
};

export default Review;