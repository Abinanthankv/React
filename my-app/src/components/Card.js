import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  return (
  
      <section className="cards">
         <div className="card">
        <img src={props.coverImg} />
        
        
        <div className="overlay">
        <div>{props.title}</div>
        <div >{props.description}</div>
        </div>
          
       
      </div>
      </section>
     
    
   
    
  );
}
