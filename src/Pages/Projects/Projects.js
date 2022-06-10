import React from 'react';
import useProjects from '../../hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useProjects();
    return (
        <div className='h-screen max-w-7xl mx-auto'>
            <p className='text-center text-4xl mb-10 text-secondary'>Recent Projects</p>
            <div className='grid grid-cols-3 gap-5'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;