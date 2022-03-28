import React from "react"
import "../styles/Navbar.css"
export default function Navbar(){
    return(
        <header>
            <h2 className="Logo">Chennai</h2>
            <nav>
                <ul class="menuitems"  >
                    <li><a id="Home" href="#home"  >Home</a></li>
                    <li><a id="Destinations" href="#destinations"  >Places to go</a></li>
                    <li><a id="Contact" href="#contact" >Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}