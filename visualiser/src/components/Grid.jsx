
import React, {useState } from "react";
import "../styles/grid-style.css";
import "../styles/navigation-style.css"
import Node from "../Node";
import Cell from "./Cell";
import { useEffect } from "react/cjs/react.development";
import { INITIALS_STATUS, CELL_OPTIONS } from "../enums";

const Grid = ({rows, cols}) => {
    const [grid, setGrid] = useState([]);
    const [startStatus, setStartStatus] = useState(null);
    const [destStatus, setDestStatus] = useState(null);
    console.log("Rerender");
    /**
     * Create the initial grid.
     */
    useEffect(()=>{
        /**
         * Generate a grid with a node in each cell 
         * based on rows and cols values from props.
         */
        const createGrid = () =>{
            for(let row = 0; row < rows; row++){
                let newRow = [];
                for(let col = 0; col < cols; col++){
                    let newNode = new Node(row, col, false, false, false, false);
                    newRow.push(newNode);
                }
                setGrid((currentState) => {
                    return [...currentState, newRow];
                })
            }
        }
        createGrid();
    },[])

    /**
     * Reset the whole grid to it's initial state.
     */
    const handleReset = () =>{
        setGrid((currentState) => {
            return currentState.map((row) => {
                return row.map((node) => {
                    return new Node(node.row,node.col, false, false, false, false, false);
                })
            })
        })
        setStartStatus(null);
        setDestStatus(null);
    }
    
    /**
     * Mark the souce cell.
     * @param {*} event 
     */
    const handlePlaceStart = (event) =>{
        if(startStatus === INITIALS_STATUS.TOGGLED){
            console.log("You have already clicked this.");
            // TODO: render a message to ask to select a cell.
        }
        if(startStatus === null){
            console.log("Click");
            setStartStatus(INITIALS_STATUS.TOGGLED);
        }
        if(startStatus === INITIALS_STATUS.SELECTED){
            
        }
    }

    /**
     * Mark the destination cell.
     * @param {*} event 
     */
    const handlePlaceDestination = (event) =>{
        if(destStatus === INITIALS_STATUS.TOGGLED){
            console.log("You have already clicked this.");
            // TODO: render a message to ask to select a cell.
        }
        if(destStatus === null){
            console.log("Click");
            setDestStatus(INITIALS_STATUS.TOGGLED);
        }
        if(destStatus === INITIALS_STATUS.SELECTED){
            
        }
    }

    /**
     * Rerender if one of the buttons to select cells button has been clicked.
     * @param {*} event 
     * @param {*} targetRow - row of the target cell.
     * @param {*} targetCol - col of the target cell.
     * @param {*} targetType - Start or Destination cell.
     */
    const handleClickOnCell = (event, targetRow, targetCol, targetType) => {
        setGrid((currentState) => {
            return currentState.map((row)=>{
                return row.map((node)=>{
                    if(node.row === targetRow && node.col === targetCol){
                        switch(targetType){
                            case CELL_OPTIONS.SOURCE:
                                return new Node(targetRow,targetCol, true, false, false, false);
                            case CELL_OPTIONS.DESTINATION:
                                return new Node(targetRow,targetCol, false, true, false, false);
                            default:
                                console.error("Mistake");
                        }
                    }
                    return node;
                })
            })
        })
    }
    
   
    //Style used here to use props.
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 30px)`,
        gridTemplateCows: `repeat(${rows}, 30px)`,
    }

    return (
        <React.Fragment>
            <div className="container">
                <button className="button bounce" style={{animationDelay: "0.07s"}}>Run</button>
                <select className="button bounce" style={{animationDelay: "0.14s"}}>
                    <option>Select Algorithm</option>
                    <option>Breadth-First Search</option>
                    <option>Dijkstra</option>
                    <option>A-Star</option>
                    </select>
                <button 
                    className="button bounce"
                    style={{animationDelay: "0.21s"}}
                    onClick={() => handleReset()}
                >Reset Board</button>
                <button 
                    className="button bounce" 
                    onClick = {(event)=>{
                        handlePlaceStart(event);
                    }}
                    // If button is being disabled change it's color
                    style={(startStatus === INITIALS_STATUS.TOGGLED && {color: "#000000", backgroundColor: "#FFFFFF"}) || {animationDelay: "0.28s"}} 
                    disabled = {startStatus === INITIALS_STATUS.TOGGLED}
                >Place start</button>
                <button 
                    className="button bounce" 
                    onClick={(event) => {
                        handlePlaceDestination(event);
                    }}
                    // If button is being disabled change it's color
                    style={(destStatus === INITIALS_STATUS.TOGGLED && {color: "#000000", backgroundColor: "#FFFFFF"}) || {animationDelay: "0.28s"}} 
                    disabled = {destStatus === INITIALS_STATUS.TOGGLED}
                >Place destination</button>
            </div>
            <div className="container-style">
                <div style = {gridStyle}>
                    {grid.map((row) => row.map((node) => <Cell
                                            key={`${node.row}-${node.col}`}
                                            row={node.row} 
                                            col={node.col} 
                                            isWall={node.isWall} 
                                            isVisited={node.isVisited} 
                                            isSource={node.isSource} 
                                            isDestination={node.isDestination}
                                            handleClickOnCell = {handleClickOnCell}
                                            startStatus = {startStatus}
                                            setStartStatus = {setStartStatus}
                                            destStatus = {destStatus}
                                            setDestStatus = {setDestStatus}
                                        />
                            ))}
                </div>
            </div>
        </React.Fragment>
    )
    
};



export default Grid;