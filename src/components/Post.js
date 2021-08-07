import "../pages/Home.css";
import "./Post.css";



export default function Post({post}) {
  return (
    <div
      className={
        post.projectlink
          ? "content-box-post active-post"
          : "content-box-post"
      }
      style={{ cursor: post.link ? "pointer" : "auto" }}
      onClick={() =>
        post.link ? window.open(post.link, "_blank") : null
      }
    >
      <div className="post">
        <img src={post.thumbnail} alt="post-image" />
        <div className="post-details">
          <h3>{post.title}</h3>
          <p className="year">{post.pubDate.slice(0, -9)}</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus cum ex quo, iste deserunt ut illo sint at. Numquam et fugit velit necessitatibus placeat quae quos id beatae veritatis quasi!</p>
          <span>{post.categories.map((cat, index) => (
              <div key={index}>#{cat} </div>
          ))}</span>
        </div>
      </div>
    </div>
  );
}
