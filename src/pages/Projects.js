import "./Home.css";
import "./Projects.css";
import Project from "../components/Project";

export default function Projects() {
  const date = new Date().getFullYear();
  return (
    <div className="flow-container">
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
        projectlink="https://github.com/ThirashaPraween/RWAD-React-Native-Web-App-Dev"
      />

      <Project
        title="React Native Web App Dev"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates odio magnam in soluta velit eos."
        status="Free"
        imglink="https://camo.githubusercontent.com/f6bc40d9b4b55d7f328aa0f3174d7cc728b0099ebffb64f06fcf1a1d41b66bbe/68747470733a2f2f692e696d6775722e636f6d2f673259486f4c322e706e67"
        projectlink=""
      />
      <p className="copyr">Copyright © {date} Thirasha Praween</p>
    </div>
  );
}
