import React from 'react';

const Blog = () => {
    return (
        <div className='mt-6'>
            <h2 className='text-2xl font-semibold'>Tell us the differences between uncontrolled and controlled components.</h2>
            <p className='mt-4'>Controlled components are UI elements or functions that have their behavior managed by a framework or library, while uncontrolled components have their own internal behavior that is not fully managed by a framework. Controlled components are more predictable and robust but may have more overhead, while uncontrolled components are simpler to use but may have more unpredictable behavior.</p>
            <h2 className='mt-5 font-semibold text-2xl'>How to validate React props using PropTypes</h2>
            <p className='mt-4'>
                You can use React's PropTypes functionality to make sure the data being supplied to your component has the right type. If the data supplied to your component doesn't match the anticipated type, React will log a warning in the console. You can define the type and shape of your props using PropTypes. This can aid in early error detection and increase the dependability of your code.
            </p>
            <h2 className='mt-5 font-semibold text-2xl'>Tell us the difference between nodejs and express js.</h2>
            <p className='mt-4'> Node.js is a platform that allows developers to run JavaScript on the server-side, while Express.js is a framework built on top of Node.js that provides tools and features for building web applications. Think of Node.js as the foundation of a building, while Express.js is the framework that helps you build the actual structure on top of it. </p>
            <h2 className='mt-5 font-semibold text-2xl'>What is a custom hook, and why will you create a custom hook?</h2>
            <p className='mt-4'> A custom hook is a reusable function in React that encapsulates common stateful logic used by multiple components. You create a custom hook when you find yourself repeating the same code in multiple components. By encapsulating the shared logic in a custom hook, you can reduce code duplication, improve code organization, and make your code more maintainable.</p>
        </div>
    );
};

export default Blog;