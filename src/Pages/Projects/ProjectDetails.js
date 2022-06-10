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
        <div className='h-screen max-w-7xl mx-auto'>
            <h2>This is about project details. This is project id no: {projectId}</h2>
            {/* <p>{project.name}</p> */}
        </div>
    );
};

export default ProjectDetails;