import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    console.log(course)
    const { image, title, details } = course
    return (
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img class="object-fill h-48 w-96 rounded-lg" src={image} alt="" />
            </div>
            <div class="p-5">
                <div >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {details.length > 60 ?
                        <>{details.slice(0, 60) + '...'}</>
                        :
                        <>{details}</>}
                </p>
                <div className='mt-10'>
                    <Link
                        to={`/courses/${course.id}`}
                        className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700'
                    >
                        <button>Start Learning</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Course;