import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PurchaseCourse = () => {
    const purchaseCourse = useLoaderData()
    return (
        <div className='flex justify-center mt-20'>
            <div className="p-6 max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800">
                <svg className="mb-2 w-10 h-10 text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                <div>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-100">Congratulations! Your <p className='font-bold text-2xl text-blue-500'>{purchaseCourse.title}</p> course has been purchased</h5>
                </div>
                <Link to='/courses' className="inline-flex items-center text-gray-200 hover:underline mt-5">
                    See Another Courses
                </Link>
            </div>
        </div>
    );
};

export default PurchaseCourse;