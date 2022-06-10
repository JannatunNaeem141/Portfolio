import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen max-w-7xl mx-auto flex items-center'>
            <div className='ml-5 lg:ml-0'>
                <p className='text-primary'>Hi, my name is</p>
                <p className='text-secondary text-3xl md:text-5xl lg:text-7xl font-semibold'>Jannatun Naeem.</p>
                <p className='text-3xl md:text-5xl lg:text-7xl font-semibold mt-4 mb-8 text-accent'>I Develop Full Stack Websites.</p>
                <p className='w-11/12 md:w-11/12 lg:w-1/2 text-accent'>This is Naeem, a Full Stack Web Developer, looking to enhance my professional experience. I'm doing my graduation in Economics. I have completed 3+ real-world projects. Please take a look at my resume.</p>
                <div className='mt-8'>
                    <Link to='/about' className='btn border-primary text-primary px-5 lg:px-10 hover:border-primary hover:bg-emerald-100/25'>More about me</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;