import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <Link
                        to='/courses'
                        className="inline-block mb-5"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </Link>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        Complete Web Development
                        <br className="hidden md:block" />
                        Course With{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            Skill Edge
                        </span>
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Many people are afraid to learn web development as programming is a time consuming skill. But it is a skill that can be learned more than many other simple skills. So you need a guideline that will teach you web development in an easy way. And you can rely on Skill Edge's 'Web Development' course.
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div>
                        <Link
                            to='/courses'
                            className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                        >
                            <button> Lets Go </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;