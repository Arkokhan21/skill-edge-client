import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PDFFile from '../../Others/PDFFile';

const CourseDetail = () => {
    const courseDetail = useLoaderData()
    const { image, title, details, total_enroll, instructor, id } = courseDetail
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                    <PDFDownloadLink document={<PDFFile />} filename="FORM">
                        <button
                            className="inline-block mb-5"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 hover:bg-indigo-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </div>
                        </button>
                    </PDFDownloadLink>
                    <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Downloade Pdf
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg sm:px-4">
                        Download the PDF for more information about our courses.
                    </p>
                    <hr className="w-full mt-5 border-gray-300" />
                </div>
            </div>

            <div className='flex justify-center'>
                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-5">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                        <div className=''>
                            <p className='text-gray-200'>Enrolled: {total_enroll}</p>
                            <p className='text-gray-200'>Instructor: {instructor.name}</p>
                            <p className='text-gray-200'>Published: {instructor.published_date}</p>
                        </div>
                        <div className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 grid mt-5'>
                            <Link to={`/purchaseCourse/${id}`}><button>Get this course</button></Link>
                        </div>
                        <div className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 grid mt-5'>
                            <Link to='/courses'><button>Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;