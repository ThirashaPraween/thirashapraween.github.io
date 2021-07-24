import { useState } from "react";
import "../pages/Home.css";
import "./Support.css";

export default function Support({support}) {

  const [hoverState, setHoverState] = useState(false)

  return (
    <div
      className="content-box-support"
      style={{ cursor: "pointer", boxShadow: hoverState ? "0 3px 70px " + support.color : "0 3px 70px #FFDD00", border: hoverState ? "2px solid " + support.color : "2px solid #FFDD00" }}
      onClick={() => window.open(support.redirect, '_blank')}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
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
