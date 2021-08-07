import { useState, useEffect } from "react";
import "./Home.css";
import "./Posts.css";
import Post from "../components/Post";
import { Link } from "react-router-dom";

export default function Posts() {

    const date = new Date().getFullYear();

    const [posts, setPosts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchedArray, setSearchedArray] = useState([]);
  
    const getPosts = async () => {
      await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thirashapraween", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.items)
          setPosts(data.items);
          setSearchedArray(data.items);
        });
    };
  
    useEffect(() => {
        getPosts();
    }, []);
  
    useEffect(() => {
      setPosts(
        searchedArray.filter(
          (projName) =>
            projName.title.toLowerCase().includes(searchText.toLowerCase()) ||
            projName.pubDate.toLowerCase().includes(searchText.toLowerCase())

  
  
        )
      );
    }, [searchText]);

  return (
    <div className="flow-container">
      <p className="my-proj">
        <Link to="/" className="back-to-home">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </Link>{" "}
        Recent Blog Posts
      </p>
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search post..."
        />
      </div>
      {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}

      <p className="more-proj-text">More blogs on my dev.to and medium</p>
      <p className="copyr">Copyright © {date} Thirasha Praween</p>
    </div>
  );
}
