import "../pages/Home.css";
import "./Support.css";

export default function Support({support}) {
  return (
    <div
      className="content-box-support"
      style={{ cursor: "pointer" }}
      onClick={() => window.open(support.redirect, '_blank')}
    >
      <div className="support">
        <img
          src={support.imglink}
          alt="support-image"
        />
        <div className="support-details">
          <h3>{support.title}</h3>
          <p>{support.desc}</p>
        </div>
      </div>
    </div>
  );
}
