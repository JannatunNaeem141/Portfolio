import React from 'react';
import profile2 from '../../images/Profile2.jpg';
import './About.css';

const About = () => {
    return (
        <div className='lg:h-screen md:h-screen max-w-7xl mx-auto flex items-center justify-center py-12 md:py-0 lg:py-0'>
            <div>
                <p className='text-center text-4xl mb-12 text-secondary'>About Me</p>
                <div className='grid grid-cols-1 lg:flex'>
                    <div className='lg:w-2/5'>
                        <div className='lg:float-right displayGrid'>
                            <div className='imgBox lg:float-right'>
                                <img src={profile2} alt="Profile-Pic" />
                            </div>
                            <div className='social-links'>
                                <a href="https://github.com/JannatunNaeem141" target="_blank"><i class="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/naeem141/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="https://www.facebook.com/naeem141/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="https://twitter.com/Jannatu03392732" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/5 ml-5 text-accent'>
                        <p><span className='text-secondary'>Hi! My name is Naeem. I am a full-stack web developer,</span> looking to enhance my professional experience. I'm skilled with JavaScript, ReactJS, NodeJS, ExpreessJS, MongoDB, Tailwind, Bootstrap, Firebase, HTML5, CSS3 etc.</p>

                        <p>My strengths are being hard-working, easily adaptable to any kind of environment, and being honest. Punctuate, self-motivated and team worker. But my weakness is I am not comfortable until I finished my work in the given time.</p>

                        <p>My short-term goal is to get a job in a reputed company in which I can grow my working skills and get more and more knowledge and gain financial independence. Besides my long-term goal is to become a more responsible and knowledgeable personality.</p>

                        <p>I am a person who is positive about every aspect of life. There are many things I like to do, see, and experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night. And to mention that coding is my all-time favorite.</p>
                        <a href='https://docs.google.com/document/d/1m0TKmhUw-T3iyjweDtev0p7_iCF0-doKrbncceVq0uk/edit?usp=sharing' target="_blank" className='btn mt-12 border-primary text-primary px-5 lg:px-10 hover:border-primary hover:bg-emerald-100/25'>Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;