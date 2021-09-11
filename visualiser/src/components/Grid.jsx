
import React, { useEffect, useState } from "react";
import "../styles/grid-style.css";

import Cell from "./Cell";

const Grid = ({rows, cols, startStatus, setStartStatus, isResetClicked, setResetClicked}) => {
    const [grid, setGrid] = useState([]);
    const [lastClicked, setLastClicked] = useState(""); // track which cell is clicked last.
    
    //create the grid once in the beginning.
    useEffect(()=>{
        if(isResetClicked){
            setResetClicked(false);
            console.log("djdjdj")
            setStartStatus(null);
            setLastClicked("");
            createGrid(rows,cols);
            console.log(startStatus);
            return;
        }
        createGrid(rows,cols);
    },[startStatus,isResetClicked])

  
   
    //Style used here to use props.
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 30px)`,
        gridTemplateCows: `repeat(${rows}, 30px)`,
    }

    /*
    * Create a grid based on provided dimensions and save it
    * in the state.
    */
    const createGrid = (rows,cols, fun) => {
        setGrid([])
        for(let r = 0; r < rows; r++){
            let row = [];
            for(let c = 0; c < cols; c++){
              
                row.push(
                    <Cell 
                        key={`${r}:${c}`} 
                        id={`${r}:${c}`} 
                        setLastClicked={setLastClicked} 
                        startStatus={startStatus}
                        setStartStatus={setStartStatus}
                        isResetClicked = {isResetClicked}
                    />
                )
            }
            setGrid((currentState) => {
                return [...currentState, row];
            })
        }
    }
    
    

    return (
        <div className="container-style">
            <div style={gridStyle}>
                {grid}
            </div>
        </div>
    )
    
};



export default Grid;