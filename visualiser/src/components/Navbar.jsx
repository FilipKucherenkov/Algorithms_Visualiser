
import React from "react";
import "../styles/navigation-style.css"

const NavBar = () =>{
    return (
        <div className="container">
            <button className="button bounce" style={{animationDelay: "0.07s"}}>Run</button>
            <select className="button bounce" style={{animationDelay: "0.14s"}}>
                <option>Select Algorithm</option>
                <option>Breadth-First Search</option>
                <option>Dijkstra</option>
                <option>A-Star</option>
                </select>
            <button className="button bounce" style={{animationDelay: "0.21s"}}>Reset Board</button>
        </div>
    );
    
}

export default NavBar;