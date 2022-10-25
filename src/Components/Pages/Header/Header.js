import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';

const Header = () => {
    const { userSignOut, user } = useContext(AuthContext)

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <Link to='/home'> <span className="font-semibold text-xl tracking-tight ml-2">Skill Edge</span></Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-lg lg:flex-grow">
                    <Link to='/home' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                        Home
                    </Link>
                    <Link to='/courses' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                        Courses
                    </Link>
                    <Link to='/blog' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                        Blog
                    </Link>

                    {user?.photoURL ?
                        <>
                            <p onClick={handleSignOut} className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10 cursor-pointer'>
                                Log Out
                            </p>
                            <img className='block mt-4 lg:inline-block lg:mt-0 rounded-full h-9' src={user?.photoURL} alt="" />
                        </>
                        :
                        <>
                            <Link to='/login' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                                Login
                            </Link>
                        </>}
                </div>
            </div>
        </nav>
    );
};

export default Header;