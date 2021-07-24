import "./Home.css";
import CoverImage from "../img/cover.png";
import ProfileImage from "../img/profile.jpg";
import SignImage from "../img/sign.png";
import Project from "../components/Project";
import Support from "../components/Support";
import { Link } from 'react-router-dom'

export default function Home() {
  const date = new Date().getFullYear();
  return (
    <div className="flow-container">
      <div className="content-box">
        <div className="image-box">
          <img src={CoverImage} className="cover-img" alt="Cover image" />
          <img src={ProfileImage} className="profile-img" alt="Profile image" />
        </div>
        <div className="social">
          <a href="https://github.com/ThirashaPraween">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
              alt="github"
            />
          </a>
          <a href="https://stackoverflow.com/users/12277320/thirasha">
            <img
              src="https://image.flaticon.com/icons/png/512/2111/2111628.png"
              alt="stackoverflow"
            />
          </a>
          <a href="https://www.linkedin.com/in/thirasha-praween/">
            <img src="https://i.imgur.com/QsRl9sn.png" alt="linkedin" />
          </a>
          <a href="https://twitter.com/ThirashaPw">
            <img
              src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
              alt="twitter"
            />
          </a>
          <a href="https://dev.to/thirashapraween">
            <img src="https://i.imgur.com/ZLG1R3Q.png" alt="dev" />
          </a>
          <a href="https://discord.gg/ymyQntskxj">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/discord-3-569463.png"
              alt="discord"
            />
          </a>
        </div>
        <div className="para-box">
          <p className="my-name">Hello, I'm Thirasha</p>
          <p>
            I'm full-stack dev and hobby mobile, web and AI developer. I'm
            currently in the last year of my university and I have a lot more
            time to find out how to raise awareness and to assist end this virus
            in the best way I can due to the current scenario we're all in.So I
            started working on small projects that would help people either see
            what's going on or stay updated.
          </p>
          <p>
            Currently, I'm working as a freelance developer. And I'm writing my
            own software tools and scripts from recent like{" "}
            <a href="https://github.com/ThirashaPraween/RearGen">RearGen</a>.
            I'm also doing AI ML programming.
          </p>
          <p>
            If you like what I do, please consider buying me a{" "}
            <a href="https://www.buymeacoffee.com/thirashapraween">Coffee</a> to
            support!
          </p>
          <img src={SignImage} alt="Sign" className="sign-img" />
          <p>Thank you for supporting!</p>
        </div>
      </div>

      <p className="my-proj">Recent Projects</p>

      <Project
        title="RearGen Modular"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates odio magnam in soluta velit eos."
        status="Free & Premium"
        imglink="https://camo.githubusercontent.com/db5aaeae10659aca3e755f54221ff3d93ea2f07da06755fe155ef99a77895a2f/68747470733a2f2f692e696d6775722e636f6d2f71387063364f712e706e67"
        projectlink="https://github.com/ThirashaPraween/RearGen"
      />

      <Project
        title="React Native Web App Dev"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates odio magnam in soluta velit eos."
        status="Free"
        imglink="https://camo.githubusercontent.com/f6bc40d9b4b55d7f328aa0f3174d7cc728b0099ebffb64f06fcf1a1d41b66bbe/68747470733a2f2f692e696d6775722e636f6d2f673259486f4c322e706e67"
        projectlink=""
      />

        
      <p className="load-more">
        <Link className="no-decorations" to="/projects"><i className="fas fa-arrow-down"></i> load more</Link>
      </p>

      <p className="my-proj">Become a Supporter</p>
      <Support title="Buy me a coffee" desc="If you like what I do and you want to support these projects and future projects, please consider buying me a Coffee to support!" imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9Iv9fWFShIajbXxO4jHtRyvK9HPiVpPtK0b1XjR_SRIbhM2JeJmuNeCHQEExnVh890Q&usqp=CAU" redirect="https://www.buymeacoffee.com/thirashapraween" />
      <p className="copyr">Copyright © {date} Thirasha Praween</p>
    </div>
  );
}
