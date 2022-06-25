import React from 'react';
import { useState } from 'react';
import useProjects from '../../hooks/useProjects';
import DetailsModal from './DetailsModal';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useProjects();
    const [details, setDetails] = useState(null);

    return (
        <div className='lg:h-screen md:h-screen max-w-7xl mx-auto py-12 md:py-0 lg:py-0'>
            <p className='text-center text-4xl mb-10 text-secondary'>Recent Projects</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-5 lg:mx-0'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                        setDetails={setDetails}
                    ></Project>)
                }
            </div>
            {details && <DetailsModal details={details}></DetailsModal>}
        </div>
    );
};

export default Projects;