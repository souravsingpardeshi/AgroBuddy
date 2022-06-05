import React from 'react';
import "./Menu.css";
import Card from "./Card.js";
function Menu() {
    return (
        <div className="Menu-main">
            <h1>══════⊹⊱≼Our Services≽⊰⊹══════</h1>
                    <div className="Menu">
            <Card name="crop prediction" img="https://img.icons8.com/color/96/000000/growing-plant.png" link="about" />
            <Card name="Disease prediction" img ="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-pesticide-farming-and-gardening-justicon-lineal-color-justicon.png" link="about" />
            <Card name="Infopedia" img="https://img.icons8.com/fluency/96/000000/green-earth.png" link="about" />
            <Card name="market" img="https://img.icons8.com/color/96/000000/tractor.png" link="" />
        </div></div>
    )
}

export default Menu
