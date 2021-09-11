
import React from "react";
import "../styles/navigation-style.css"

const NavBar = (props) =>{
    return (
        <div className="container">
            <button className="button bounce" style={{animationDelay: "0.07s"}}>Run</button>
            <select className="button bounce" style={{animationDelay: "0.14s"}}>
                <option>Select Algorithm</option>
                <option>Breadth-First Search</option>
                <option>Dijkstra</option>
                <option>A-Star</option>
                </select>
            <button className="button bounce" style={{animationDelay: "0.21s"}} 
                onClick={()=>{
                    props.setResetClicked(true);
                }}>Reset Board</button>
            <button className="button bounce" style={{animationDelay: "0.28s"}} onClick={(e) =>{
                if(props.startStatus==="CLICKED"){
                    console.log("You have already clicked it!");
                    return;
                }
                props.setStartStatus("CLICKED");
                console.log("CLICKED");
            }}>Place start</button>
            <button className="button bounce" style={{animationDelay: "0.28s"}}>Place destination</button>
        </div>
        
    );
    
}

export default NavBar;