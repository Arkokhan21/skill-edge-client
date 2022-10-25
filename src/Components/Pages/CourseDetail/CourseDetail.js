import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courseDetail = useLoaderData()
    console.log(courseDetail)
    const { image, title, details, total_enroll, instructor } = courseDetail
    return (
        <div className='flex justify-center my-20'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="rounded-lg" src={image} alt="" />
                </div>
                <div class="p-5">
                    <div >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-400">{details}</p>
                </div>
                <div className='grid justify-items-start'>
                    <p className='text-gray-400'>Total Enroll: {total_enroll}</p>
                    <p className='text-gray-400'>Instructor: {instructor.name}</p>
                    <p className='text-gray-400'>Published: {instructor.published_date}</p>
                </div>
                <Link
                    to='/'
                    className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 grid mt-5'
                >
                    <button>Purchase</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetail;