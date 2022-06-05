import { collection, onSnapshot, query, QuerySnapshot } from '@firebase/firestore';
import React, { Component } from 'react'
import Banner from "./component/Banner"
import CropCard from "./component/CropCard";
import {db} from "./firebase"
function Infopedia(){
    const [crops,setCrops] = React.useState([]);
    React.useEffect(()=>{
        const q = query(collection(db,"Infopedia"));
        const sub = onSnapshot(q,(querySnapshot)=>{
            let cropArray = [];
            querySnapshot.forEach((doc)=>{
                cropArray.push({...doc.data(),id:doc.id});
            });
            setCrops(cropArray);
        });
        return ()=>sub();
    })
    return (
        <div className="Info">
            <Banner/>
            <div className="infcont">
            { crops.map((crop)=>(
            <CropCard name={crop.Name} img={crop.img} desc={crop.desc} />
            ))}
            </div>
        </div>
    )
}
export default Infopedia
