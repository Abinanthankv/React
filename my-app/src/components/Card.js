import React from "react";
import "../styles/Card.css"
import coimbatore from "../images/coimbatore.jpg"
export default function Card() {
  return (
    <section id="destinations">
      <h1>Places to Visit</h1>
      <div className="cards">
      <img  src={coimbatore}  ></img>


      </div>
     
    </section>
  );
}
