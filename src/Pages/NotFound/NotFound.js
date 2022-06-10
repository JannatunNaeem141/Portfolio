import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <img src="https://i.ibb.co/d7BzbQy/how-to-find-and-fix-404-errors-in-wordpress.png" alt="" />
                <p className='text-center text-secondary text-4xl mt-5 mb-3'> Page not found</p>
                <p className='text-center text-accent'>Sorry, the page you are looking for is not found. Please, make sure you have typed the correct URL</p>
            </div>
        </div>
    );
};

export default NotFound;