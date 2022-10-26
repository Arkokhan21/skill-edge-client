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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </Link>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        We Provide
                        <br className="hidden md:block" />
                        The Best Training to Develop Technical and{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            Professional Skills
                        </span>
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Many people are afraid to learn programming. But it is a skill that can be learned more than many other general skills. So you need a guideline that will teach you programming in an easy way. And you can rely on Skill-Edge's 'Programming' courses.
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
                        src="https://images.unsplash.com/photo-1568333261345-0918efdce2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                </div>
            </div>

            <section className="py-6 bg-gray-800  text-gray-100 mt-36">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Meet our team</h1>
                    <p className="max-w-2xl text-center  text-gray-400">The talented people behind the scenes</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full  bg-gray-500"
                                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <p className="text-xl font-semibold leading-tight">Jimmy Dane</p>
                            <p className=" text-gray-400">Web Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full  bg-gray-500"
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <p className="text-xl font-semibold leading-tight">Bruce Banner</p>
                            <p className=" text-gray-400">Graphic Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full  bg-gray-500"
                                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <p className="text-xl font-semibold leading-tight">Tony Stark</p>
                            <p className=" text-gray-400">Web Developer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full  bg-gray-500"
                                src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <p className="text-xl font-semibold leading-tight">Peter Parker</p>
                            <p className=" text-gray-400">React Developer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full  bg-gray-500"
                                src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <p className="text-xl font-semibold leading-tight">Chris Hemsworth</p>
                            <p className=" text-gray-400">Frontend Developer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full  bg-gray-500"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className=" text-gray-400">Laravel Developer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;