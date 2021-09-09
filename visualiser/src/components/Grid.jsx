
import React, { useEffect, useState } from "react";
import "../styles/grid-style.css";

const Grid = ({rows, cols}) => {
    const [grid, setGrid] = useState([]);

    //create the grid once in the beginning.
    useEffect(()=>{
        createGrid(rows,cols);
    },[])

    //Style used here to use props.
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 25px)`,
        gridTemplateCows: `repeat(${rows}, 25px)`,
    }
    
    /*
    * Create a grid based on provided dimensions and save it
    * in the state.
    */
    const createGrid = (rows,cols) => {
        for(let r = 0; r < rows; r++){
            let row = [];
            for(let c = 0; c < cols; c++){
                row.push(<div className="cell-style" >x</div>)
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