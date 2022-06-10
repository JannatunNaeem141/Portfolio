import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();
    // const [project, setProject] = useState({});

    // useEffect(() => {
    //     const url = `projects.json/${projectId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProject(data))
    // }, [project]);
    // const test = 
    // console.log(project);
    return (
        <div className='h-screen max-w-7xl mx-auto flex justify-center items-center'>
            <div>
                <h2 className='text-xl text-secondary'>This is about project id no: {projectId}</h2>
                <p className='text-xl text-secondary'>Still working on this page...</p>
            </div>
        </div>
    );
};

export default ProjectDetails;