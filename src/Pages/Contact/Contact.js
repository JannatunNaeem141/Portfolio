import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div className='h-screen max-w-7xl mx-auto flex justify-center items-center'>
            <div>
                <div>
                    <p className='text-xl text-primary text-center'>CONTACT</p>
                    <p className='text-4xl text-secondary mb-10 text-center'>GET IN TOUCH</p>
                    <div className='flex'>
                        <div className='commonItem text-center w-1/3 mr-5'>
                            <p><i class="fa-solid fa-phone-flip text-2xl text-primary mb-3"></i></p>
                            <p className='text-secondary font-semibold'>Phone</p>
                            <p className='text-accent'>+8801934624467</p>
                        </div>
                        <div className='commonItem text-center w-1/3 mr-5'>
                            <p><i class="fa-solid fa-envelope text-2xl text-primary mb-3"></i></p>
                            <p className='text-secondary font-semibold'>Email</p>
                            <p className='text-accent'>jannatunnaeem141@gmail.com</p>
                        </div>
                        <div className='commonItem text-center w-1/3'>
                            <p><i class="fa-solid fa-location-dot text-2xl text-primary mb-3"></i></p>
                            <p className='text-secondary font-semibold'>Location</p>
                            <p className='text-accent'>Mirpur-1, Dhaka-1216, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-12'>
                    <div className='w-1/2 grid w-full'>
                        <input type="text" placeholder='Name' className='h-11 text-base outline-none inputField mb-6 rounded-3xl py-4 px-5' />
                        <input type="email" placeholder='Email' className='h-11 text-base outline-none inputField mb-6 rounded-3xl py-4 px-5' />
                        <input type="text" placeholder='Subject' className='h-11 text-base outline-none inputField mb-6 rounded-3xl py-4 px-5' />
                    </div>
                    <div className='w-1/2 w-full'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='w-full ml-6 h-44 p-4 resize-none rounded-3xl outline-none inputField'></textarea>
                    </div>
                </div>
                <div className='w-full'>
                    <Link to='' className='btn mt-6 border-primary text-primary px-10 hover:border-primary hover:bg-emerald-100/25 float-right'>Send Message</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;