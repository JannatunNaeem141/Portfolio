import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar max-w-7xl mx-auto">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact bg-black dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li><Link to='/' className='text-secondary hover:text-primary'>Home</Link></li>
                        <li><Link to='/about' className='text-secondary hover:text-primary'>About</Link></li>
                        <li><Link to='/projects' className='text-secondary hover:text-primary'>Projects</Link></li>
                        <li><Link to='/blogs' className='text-secondary hover:text-primary'>Blogs</Link></li>
                        <li><Link to='/contact' className='text-secondary hover:text-primary'>Contact</Link></li>
                    </ul>
                </div>
                <Link to="/" class="text-primary normal-case text-xl">Jannatun Naeem</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/' className='text-secondary hover:text-primary'>Home</Link></li>
                    <li><Link to='/about' className='text-secondary hover:text-primary'>About</Link></li>
                    <li><Link to='/projects' className='text-secondary hover:text-primary'>Projects</Link></li>
                    <li><Link to='/blogs' className='text-secondary hover:text-primary'>Blogs</Link></li>
                    <li><Link to='/contact' className='text-secondary hover:text-primary'>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;