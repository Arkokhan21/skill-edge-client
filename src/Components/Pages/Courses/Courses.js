import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='flex flex-row my-10'>
            <div className='basis-80'>
                <p className='my-5 text-xl font-bold'>Total Course: {courses.length}</p>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </p>)
                }
            </div>

            <div className='basis-full'>
                <div className='grid grid-cols-3 gap-x-4 gap-y-6'>
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;