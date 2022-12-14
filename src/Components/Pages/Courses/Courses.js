import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='flex flex-row my-10'>
            <div className='basis-80 bg-slate-100'>
                <p className='my-5 text-2xl font-bold'>Total Course: {courses.length}</p>
                {
                    courses.map(course => <p className='mt-10 text-lg font-bold hover:text-blue-700' key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </p>)
                }
            </div>

            <div className='basis-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-6'>
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;