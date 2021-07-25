import { useState, useEffect } from "react";
import "./Home.css";
import "./Projects.css";
import Project from "../components/Project";
import { Link } from "react-router-dom";

export default function Projects() {
  const date = new Date().getFullYear();

  const [projects, setProjects] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedArray, setSearchedArray] = useState([]);

  const getProjects = async () => {
    await fetch("./data/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setSearchedArray(data);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    setProjects(
      searchedArray.filter(
        (projName) =>
          projName.title.toLowerCase().includes(searchText.toLowerCase()) ||
          projName.desc.toLowerCase().includes(searchText.toLowerCase()) ||
          projName.status.toLowerCase().includes(searchText.toLowerCase()) ||
          projName.date.toLowerCase().includes(searchText.toLowerCase())


      )
    );
  }, [searchText]);

  return (
    <div className="flow-container">
      <p className="my-proj">
        <Link to="/" className="back-to-home">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </Link>{" "}
        Latest Projects
      </p>
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search project..."
        />
      </div>
      {projects
        .slice(0)
        .reverse()
        .map((project, index) => (
          <Project project={project} key={index} />
        ))}

      <p className="more-proj-text">More projects on my Linkedin and Github</p>
      <p className="copyr">Copyright © {date} Thirasha Praween</p>
    </div>
  );
}
