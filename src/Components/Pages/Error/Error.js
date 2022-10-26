import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section>
            <div className="mt-16">
                <h1 className="mb-4 text-7xl font-extrabold lg:text-9xl">404</h1>
                <p className="mb-4 text-4xl font-bold md:text-4xl">Something's missing.</p>
                <p className="mb-4 text-xl font-bold">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Link
                    to='/home'
                    className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                >
                    <button className='mt-10'>Back to Homepage</button>
                </Link>
            </div>
        </section>
    );
};

export default Error;