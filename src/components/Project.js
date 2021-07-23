import React from "react";
import "../pages/Home.css";
import "./Project.css";
import RearGenLogo from  '../img/projects/reargen.png'

export default function Projects({ title, desc, status, imglink, projectlink }) {
  return (
    <div className="content-box-project" style={{cursor: projectlink ? "pointer" : "auto"}} onClick={() => projectlink ? window.open(projectlink, '_blank') : null}>
      <div className="project">
        <img src={imglink} alt="project-image" />
        <div className="project-details">
          <h3>{title}</h3>
          <p>{desc}</p>
          <span>{status}</span>
        </div>
      </div>
      
    </div>
  );
}
