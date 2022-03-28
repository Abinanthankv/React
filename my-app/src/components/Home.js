import React from "react";
import "../styles/Home.css"
import chennai from "../images/chennai.jpg"
import coimbatore from "../images/coimbatore.jpg"

export default function Home() {
    return (
        <section id="home" >
          <img className="slides" src={chennai}  ></img>
          <img src={coimbatore}></img>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
          
        </section>
    );
}
var slidePosition = 0;


function showSlidesAuto() {
	
  var i;
  var slides = document.getElementById("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  // Change image every 2 seconds
  setTimeout(showSlidesAuto, 5000);
}