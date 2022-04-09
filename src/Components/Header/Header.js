import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-center py-6 bg-gray-600 text-white'>
            <Link to={`/`} className="mr-2 text-xl">Home</Link>
            <Link to={`/reviews`} className="mr-2 text-xl">Reviews</Link>
            <Link to={`/dashboard`} className="mr-2 text-xl">Dashboard</Link>
            <Link to={`/blogs`} className="mr-2 text-xl">Blogs</Link>
        </nav>
    );
};

export default Header;