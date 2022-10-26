import React from 'react';

const Faq = () => {
    return (
        <section className="dark:bg-gray-600 dark:text-gray-100 mt-16">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">What is the purpose of React Router?</h3>
                        <p className="mt-1 dark:text-gray-400">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does context API works?</h3>
                        <p className="mt-1 dark:text-gray-400">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is useRef?</h3>
                        <p className="mt-1 dark:text-gray-400">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef only returns one item. It returns an Object called current.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does React Work ?</h3>
                        <p className="mt-1 dark:text-gray-400">
                            React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;