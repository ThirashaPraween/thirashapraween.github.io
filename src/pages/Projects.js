import { useState, useEffect } from 'react'
import "./Home.css";
import "./Projects.css";
import Project from "../components/Project";

export default function Projects() {
  const date = new Date().getFullYear();

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    await fetch(
      "https://raw.githubusercontent.com/ThirashaPraween/thirashapraween.github.io/main/src/data/projects.json",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flow-container">
       <p className="my-proj">Recent Projects</p>
       {projects.map((project, index) => (
        <Project project={project} key={index} />
       ))}

      <p className="copyr">Copyright © {date} Thirasha Praween</p>
    </div>
  );
}
