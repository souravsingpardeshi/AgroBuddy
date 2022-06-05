import React from 'react'
import Card from "./Card.js";
import guide from "../Img/guide.jpeg"
import lead from "../Img/lead.jpeg"
import sush from "../Img/sush.jpeg"
import rush from "../Img/rush.jpeg"
export default function AboutUs() {
    return (
        <div className="About_us">
            <br />
            <br />
            <h1>Our Team</h1>
            <br />
            <Card name="Prof.Rohini Rankhamb (Guide)" img={guide} link="https://github.com/souravsingpardeshi" /><br/>
           <div className="team"> <Card name="Souravsing Pardeshi (Lead)" img={lead} link="https://share.streamlit.io/souravsingpardeshi/crop_project/main/app.py" />
            <Card name="Sushant Nikam" img={sush} link="https://share.streamlit.io/souravsingpardeshi/crop_project/main/app.py" />
            <Card name="Rushikesh Patil" img={rush} link="https://share.streamlit.io/souravsingpardeshi/crop_project/main/app.py" />
            <Card name="Manisha Chavan" img="https://img.icons8.com/color/96/000000/growing-plant.png" link="https://share.streamlit.io/souravsingpardeshi/crop_project/main/app.py" />
        </div></div>
    )
}
