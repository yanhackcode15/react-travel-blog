import React from "react"
import star from "../images/star.png"
import dot from "../images/ellipse.png"

export default function Card(props) {
    let badgeText;
    if (props.openSpots===0) {
        badgeText = "Soldout"
    }
    else if (props.location==="Online") {
        badgeText = "Online"
    }
    return (
        <div className={props.className}>
            {badgeText&&<div className="badge">{badgeText}</div>}
            <img className="card-image" src={props.coverImg} />
                    <div className="ratings">
                        <img className="star-image" src={star} />
                        <span className="reviewCount">({props.stats.rating}) {props.stats.reviewCount} </span>
                        <img className="dot" src={dot} />
                        <span className="country">USA</span>
                    </div>
                    <div className="lesson-name">
                        <span>{props.title}</span>
                    </div>
                    <div className="lesson-price">
                        <span className="bold">From ${props.price}</span> / person
                    </div>
        </div>
    )
}