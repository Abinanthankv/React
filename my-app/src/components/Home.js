import React from "react";
import "../styles/Home.css"
import chennai from "../images/chennai.jpg"
import coimbatore from "../images/coimbatore.jpg"

export default function Home() {

    return (
     
        <section id="home" >
          <img className="slides" src={chennai}  ></img>
       
          
        </section>
    );
}
