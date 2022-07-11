import React from "react"
import ReactDOM from "react-dom"
import Nav from "./components/nav"
import Hero from "./components/hero"
import Experiences from "./components/experiences"


export default function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <Experiences />
        </div>
    )
}