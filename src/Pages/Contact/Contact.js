import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div className='lg:h-screen max-w-7xl mx-auto flex justify-center items-center py-12 lg:py-0'>
            <div>
                <div className='mx-5 lg:mx-0'>
                    <p className='lg:text-xl md:text-lg text-base text-primary text-center'>CONTACT</p>
                    <p className='lg:text-4xl md:text-3xl text-2xl text-secondary mb-10 text-center'>GET IN TOUCH</p>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:flex'>
                        <div className='commonItem text-center w-full lg:w-1/3 md:w-full md:mr-5 lg:mr-5 mb-5 lg:mb-0'>
                            <p><i class="fa-solid fa-phone-flip text-2xl text-primary mb-3"></i></p>
                            <p className='text-secondary font-semibold'>Phone</p>
                            <p className='text-accent'>+8801934624467</p>
                        </div>
                        <div className='commonItem text-center w-full lg:w-1/3 lg:mr-5 mb-5 lg:mb-0'>
                            <p><i class="fa-solid fa-envelope text-2xl text-primary mb-3"></i></p>
                            <p className='text-secondary font-semibold'>Email</p>
                            <p className='text-accent'>jannatunnaeem141@gmail.com</p>
                        </div>
                        <div className='commonItem text-center w-full lg:w-1/3'>
                            <p><i class="fa-solid fa-location-dot text-2xl text-primary mb-3"></i></p>
                            <p className='text-secondary font-semibold'>Location</p>
                            <p className='text-accent'>Mirpur-1, Dhaka-1216, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:flex mt-12 mx-5 lg:mx-0 md:mx-0'>
                    <form className='w-1/2 grid w-full'>
                        <input type="text" placeholder='Name' className='h-11 text-base outline-none inputField mb-6 rounded-3xl py-4 px-5' />
                        <input type="email" placeholder='Email' className='h-11 text-base outline-none inputField mb-6 rounded-3xl py-4 px-5' />
                        <input type="text" placeholder='Subject' className='h-11 text-base outline-none inputField mb-6 rounded-3xl py-4 px-5' />
                    </form>
                    <form className='w-1/2 w-full'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='w-full lg:ml-6 h-44 p-4 resize-none rounded-3xl outline-none inputField'></textarea>
                    </form>

                </div>
                <div className='w-full '>
                    <Link to='' type='submit' className='btn mt-6 border-primary text-primary px-10 hover:border-primary hover:bg-emerald-100/25 float-right mr-5 lg:mr-0 md:mr-0'>Send Message</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;