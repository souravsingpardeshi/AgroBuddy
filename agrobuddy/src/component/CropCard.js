import React from 'react'

function CropCard(props) {
    return (
        <div className="CropCard">
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <h1>{props.desc}</h1>
    </div>
    )
}

export default CropCard
