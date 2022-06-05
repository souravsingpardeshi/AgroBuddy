import React from 'react'
import Banner from "./component/Banner";
import Menu from "./component/Menu";
import About from "./component/AboutUs"
import { Fade } from "react-awesome-reveal";
export default function Home() {
    return (
        <div className="Home">
            <Fade>
            <Banner/>
            <Menu/>
            <About/>
            </Fade>
        </div>
    )
}
