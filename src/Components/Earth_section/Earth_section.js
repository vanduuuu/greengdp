import React from "react";
import "./Earth_section.css";
import Navbar from "./Navbar";

// Replace with your Cloudinary video URL
const videoBgUrl = "https://webpagecdnstorage.blob.core.windows.net/greengdp/cloud-sky.mp4";

const Earth_section = () => {
  return (
    <div>
    
<Navbar/>
      <div className="wrapper1">
        <video src={videoBgUrl} autoPlay loop muted />
        <div className="world zoom">
          <img src="https://webpagecdnstorage.blob.core.windows.net/greengdp/plane.png" alt="Plane" loading="lazy" />
        </div>
        <div className="title-box1">
          <h2>
            An Initiative of <span>Precision Grow</span> (A Unit Of Tech Visit
            IT Pvt Ltd)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Earth_section;
