import "./NotFound.css";
import "./Home.css";
import DevLogo from "../img/logo.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  const date = new Date().getFullYear();
  return (
    <div className="center-container">
      <Link to="/">
        <img className="dev-img" src={DevLogo} alt="dev-logo" />
      </Link>
      <p>404 Not Found</p>
      <p className="copyr">Copyright © {date} Thirasha Praween</p>
    </div>
  );
}
