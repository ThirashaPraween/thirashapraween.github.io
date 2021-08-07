import { useState } from "react";
import "../pages/Home.css";
import "./Support.css";

export default function Support({support}) {

  const [hoverState, setHoverState] = useState(false)

  return (
    <div
      className="content-box-support"
      style={{ cursor: "pointer", background: "#ffffff", zIndex: hoverState ? 1 : 0, position: hoverState ? "relative" : "", filter: hoverState ? "grayscale(0%)" : "grayscale(100%)", boxShadow: hoverState ? `5px 5px 100px ${support.color}, -5px -5px 100px ${support.color}` : "20px 20px 61px #d2d2d2, -20px -20px 61px #ffffff" }}
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
