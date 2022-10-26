import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y text-center">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Server</p>
                            <p className="text-gray-600">26 Oct 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-gray-700">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is Cors?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Authentication</p>
                            <p className="text-gray-600">26 Oct 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-gray-700">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>React-Router</p>
                            <p className="text-gray-600">26 Oct 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-gray-700">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How does the private route work?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Node.js</p>
                            <p className="text-gray-600">26 Oct 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-gray-700">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is Node? How does Node work?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="cursor-pointer inline-flex items-center font-semibold">
                    See all blogs
                    <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default Blog;