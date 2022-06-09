import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen max-w-7xl mx-auto flex items-center'>
            <div>
                <p className='text-primary'>Hi, my name is</p>
                <p className='text-secondary text-7xl font-semibold'>Jannatun Naeem.</p>
                <p className='text-7xl font-semibold mt-4 mb-8 text-accent'>I build things for the web.</p>
                <p className='w-1/2 text-accent'>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.</p>
                <div className='mt-8'>
                    <Link to='/about' className='btn border-primary text-primary px-10 hover:border-primary hover:bg-emerald-100/25'>More about me</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;