import "../pages/Home.css";
import "./Support.css";

export default function Support({title, desc, imglink, redirect}) {
  return (
    <div
      className="content-box-support"
      style={{ cursor: "pointer" }}
      onClick={() => window.open(redirect, '_blank')}
    >
      <div className="support">
        <img
          src={imglink}
          alt="support-image"
        />
        <div className="support-details">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
