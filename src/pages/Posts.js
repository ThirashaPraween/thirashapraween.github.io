import { useState, useEffect } from "react";
import "./Home.css";
import "./Posts.css";
import Post from "../components/Post";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";

export default function Posts() {
  const date = new Date().getFullYear();
  const rgPattern = /(<([^>]+)>)/ig;

  const [loadingCounter, setLoadingCounter] = useState(true)
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedArray, setSearchedArray] = useState([]);

  const getPosts = async () => {
    await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thirashapraween",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
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
          projName.pubDate.toLowerCase().includes(searchText.toLowerCase()) ||
          projName.categories.join(",").includes(searchText.toLowerCase()) ||
          projName.description.replace(rgPattern, '').substring(0, 240).toLowerCase().includes(searchText.toLowerCase())
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
          onChange={(e) => setSearchText(e.target.value) & setLoadingCounter(false)}
          value={searchText}
          placeholder="Search post..."
        />
      </div>
      {
        loadingCounter && posts.length === 0 && <p className="loading-posts">Please wait...</p>
      }
      <ul>
        <FlipMove>
          {posts.map((post, index) => (
            <li key={index}>
              <Post post={post}  />
            </li>
          ))}
        </FlipMove>
      </ul>

      <p className="more-proj-text">More blogs on my dev.to and medium</p>
      <p className="copyr">Copyright © {date} Thirasha Praween</p>
    </div>
  );
}
