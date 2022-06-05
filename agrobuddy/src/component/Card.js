import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
function Card(props) {
    return (
        <div className="Card">
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
           <Link to={props.link}> <button> click me</button></Link>
        </div>
    )
}

export default Card
