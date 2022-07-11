import React from "react"
import symbol from "../images/symbol.png"


export default function Card(props) {
   
    return (
        <div>
            <img src={props.image} />
            <img src={symbol} />
            <span>{props.country}</span>
            <span><a href={props.mapLink}>View on Google Maps</a></span>
            <h1>{props.location}</h1>
            <h4>{props.time}</h4>
            <p>{props.description}</p>
        </div>
        
    )
}