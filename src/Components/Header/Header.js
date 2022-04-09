import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-center py-6 bg-gray-600 text-white'>
            <Link to={`/`} className="mr-4 text-xl">Home</Link>
            <Link to={`/reviews`} className="mr-4 text-xl">Reviews</Link>
            <Link to={`/dashboard`} className="mr-4 text-xl">Dashboard</Link>
            <Link to={`/blogs`} className="mr-4 text-xl">Blogs</Link>
            <Link to={`/about`} className="mr-4 text-xl">About</Link>
        </nav>
    );
};

export default Header;