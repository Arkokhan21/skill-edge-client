import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-gray-800 text-gray-100 mt-36">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <div rel="noopener noreferrer" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                        </div>
                        <span className="font-semibold text-xl tracking-tight ml-2">Skill Edge</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
                        <ul className="space-y-1 cursor-pointer">
                            <li>
                                <span rel="noopener noreferrer">Features</span>
                            </li>
                            <li>
                                <span rel="noopener noreferrer">Integrations</span>
                            </li>
                            <li>
                                <span rel="noopener noreferrer">FAQ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
                        <ul className="space-y-1 cursor-pointer">
                            <li>
                                <span rel="noopener noreferrer">Privacy</span>
                            </li>
                            <li>
                                <span rel="noopener noreferrer">Terms of Service</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-gray-50">Developers</h3>
                        <ul className="space-y-1 cursor-pointer">
                            <li>
                                <span rel="noopener noreferrer">Public API</span>
                            </li>
                            <li>
                                <span rel="noopener noreferrer">Documentation</span>
                            </li>
                            <li>
                                <span rel="noopener noreferrer">Guides</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-start space-x-3 ml-5 cursor-pointer">
                            <span rel="noopener noreferrer" title="Facebook" className="flex items-center p-1 text-xl">
                                <FaFacebook></FaFacebook>
                            </span>
                            <span rel="noopener noreferrer" title="Twitter" className="flex items-center p-1 text-xl">
                                <FaTwitter></FaTwitter>
                            </span>
                            <span rel="noopener noreferrer" title="Instagram" className="flex items-center p-1 text-xl">
                                <FaInstagramSquare></FaInstagramSquare>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© 2022 Skill Edge. All rights reserved.</div>
        </footer>
    );
};

export default Footer;