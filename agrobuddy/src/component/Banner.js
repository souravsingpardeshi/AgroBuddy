import React from 'react';
import "./Banner.css";
import "./Header.css";
import SimpleImageSlider from "react-simple-image-slider";
import logo from "./mainlogo.png";
function Banner() {
const images = [
  { url: "https://i.pinimg.com/564x/c3/14/bd/c314bd40fce1c164d5a6d0cfd4ba8681.jpg" },
  { url: "https://i.pinimg.com/564x/fa/d1/13/fad113786e82b2598f8017dea4cc237c.jpg" },
  { url: "https://as1.ftcdn.net/v2/jpg/03/76/16/82/1000_F_376168217_gpTxeD7TLdrKvli8vfxqex3blZGrjc6G.jpg" },
];
    return (
        <div className="Banner">
               <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <h1>AgroBuddy</h1>
            </div>
          <button>About us</button>
        </div>
            <SimpleImageSlider
        width={"120%"}
        height={500}
        images={images}
        loop={true}
        autoPlay={true}
      />
        </div>
    )
}

export default Banner
