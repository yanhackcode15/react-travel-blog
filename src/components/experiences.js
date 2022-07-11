import React from "react"
import Card from "./card"
import card1 from "../images/card 1.png"
import CardData from "../../data"

export default function Experiences() {
    const mapper = function (card){
        console.log(card.coverImg)
        return (
        <Card className="card"
            key={card.id}
            {...card}
        />
       )
    }
    const cards = CardData.map(mapper)
    return (
        <div>
           <div className="experiences-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
            <div className="cards">
                {cards}              
            </div>
        </div>
    )
}