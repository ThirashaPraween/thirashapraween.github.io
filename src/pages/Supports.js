import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Support from '../components/Support';
import "./Home.css";

export default function Supports() {
    const date = new Date().getFullYear();

  const [supports, setSupports] = useState([]);

  const getSupports = async () => {
    await fetch("./data/supports.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSupports(data);
      });
  };

  useEffect(() => {
    getSupports();
  }, []);



  return (
    <div className="flow-container">
      <p className="my-proj">
        <Link to="/" className="back-to-home">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </Link>{" "}
        Become a Supporter
      </p>
   
      {supports
        .slice(0)
        .reverse()
        .map((support, index) => (
          <Support support={support} key={index} />
        ))}

      <p className="copyr">Copyright © {date} Thirasha Praween</p>
    </div>
  );
}
