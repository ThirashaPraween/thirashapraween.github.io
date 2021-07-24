import "../pages/Home.css";
import "./Project.css";

export default function Projects({project}) {
  return (
    <div
      className={
        project.projectlink
          ? "content-box-project active-project"
          : "content-box-project"
      }
      style={{ cursor: project.projectlink ? "pointer" : "auto" }}
      onClick={() =>
        project.projectlink ? window.open(project.projectlink, "_blank") : null
      }
    >
      <div className="project">
        <img src={project.imglink} alt="project-image" />
        <div className="project-details">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <span>{project.status}</span>
        </div>
      </div>
    </div>
  );
}
