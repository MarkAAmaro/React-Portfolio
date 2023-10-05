import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Project = (props) => {
  return (
    <div className="project">
      <h3>{props.title}</h3>
      <img 
        src={props.imageUrl} 
        alt={props.title} 
        style={{ maxWidth: '300px', maxHeight: '300px', width: 'auto', height: 'auto' }}
      />
      <p>
        <a href={props.deployedUrl}>Deployed Project</a><br />
        <a href={props.repoUrl}>
          <i className="fa fa-github"></i> GitHub
        </a>
      </p>
    </div>
  );
};

export default Project;

