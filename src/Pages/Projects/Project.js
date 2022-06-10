import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Project.css';

const Project = ({ project }) => {
    const { name, id, img1, github, live } = project;
    const navigate = useNavigate();
    const navigateToProjectDetails = id => {
        navigate(`/project/${id}`);
    }
    return (
        <div className='grid-cols-3 gap-5 w-full '>
            <div className=''>
                <div className='w-full'>
                    <div className='w-full'>
                        <Link to={`/project/${id}`}><img src={img1} alt="" className='mb-4 h-96' /></Link>
                    </div>
                    <div>
                        <p className='text-xl text-secondary mb-5'>{name}</p>
                    </div>
                    <div>
                        <a href={live} className=' rounded-3xl  px-5 py-2 commonBtn text-accent hover:text-primary mr-5' target="_blank">Live Link</a>
                        <a href={github} className=' rounded-3xl  px-5 py-2 commonBtn text-accent hover:text-primary' target="_blank">Github Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;