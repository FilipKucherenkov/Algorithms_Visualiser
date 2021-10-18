
import React, {useState } from "react";
import "../styles/grid-style.css";
import "../styles/navigation-style.css"
import Node from "../Node";
import Cell from "./Cell";
import { useEffect } from "react/cjs/react.development";
import { INITIALS_STATUS, CELL_OPTIONS } from "../enums";
import {visualiseBfs} from "../algorithms/bfs";

const Grid = ({rows, cols}) => {
    const [grid, setGrid] = useState([]);
    const [startStatus, setStartStatus] = useState(null);
    const [destStatus, setDestStatus] = useState(null);

    const [selectedAlgo, setSelectedAlgo] = useState(null);
    const [sourceNode, setSourceNode] = useState(null);
    const [destNode, setDestNode] = useState(null);

    const [isMouseDown, setMouseDown] = useState(false);


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
                    let divNode = document.getElementById(`${node.row}-${node.col}`);
                    divNode.classList.remove("visited-node");
                    divNode.classList.remove("path-node");
                    return new Node(node.row,node.col, false, false, false, false, false);
                })
            })
        })
        setStartStatus(null);
        setDestStatus(null);
        setSourceNode(null);
        setDestNode(null);
    }
    
    const handleMouseDown = () => {
        setMouseDown(true);
    }
    const handleMouseUp = () => {
        setMouseDown(false);
    }

    const handleMouseMove = (targetRow, targetCol) => {
        if(!isMouseDown){
            return;
        }
        setGrid((currentState) => {
            return currentState.map((row) => {
                return row.map((node) => {
                    if(startStatus === INITIALS_STATUS.TOGGLED){
                        // render a message to select a source node first.
                        return node;
                    }
                    if(destStatus === INITIALS_STATUS.TOGGLED){
                        // render a message to select a dest node first
                        return node;
                    }
                    if(node.row == targetRow && node.col == targetCol && !node.isSource && !node.isDestination){
                        return new Node(node.row,node.col, false, false, true, false, false);
                    }
                    return node;
                })
            })
        })
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
                                let source =  new Node(targetRow,targetCol, true, false, false, false);
                                setSourceNode(source);
                                return source;

                            case CELL_OPTIONS.DESTINATION:
                                let dest =  new Node(targetRow,targetCol, false, true, false, false);
                                setDestNode(dest);
                                return dest;

                            default:
                                console.error("Mistake");
                        }
                    }
                    return node;
                })
            })
        })
    }
    
   const handleRun = () =>{  
        switch(selectedAlgo){
            case "Breadth-First Search":
                visualiseBfs(grid,sourceNode,destNode);      
                break;
            case "Dijkstra":
                break;
            case "A-Star":
                break;
            default:
                console.log("No algorithm selected"); 
        }
   }
    //Style used here to use props.
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 30px)`,
        gridTemplateCows: `repeat(${rows}, 30px)`,
        backgroundColor: "white",
    }

    
    return (
        <React.Fragment>
            <div className="container">
                <button 
                    className="button bounce" 
                    style={{animationDelay: "0.07s"}}
                    onClick={(event) => {
                       handleRun();
                    }}
                >Run</button>
                <select 
                    className="button bounce" 
                    style={{animationDelay: "0.14s", outline: 0}} 
                    onChange ={(e) => {

                    setSelectedAlgo(e.target.value);
                }}>
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
                                            id= {`${node.row}-${node.col}`}
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
                                            handleMouseDown = {handleMouseDown}
                                            handleMouseUp = {handleMouseUp}
                                            handleMouseMove= {handleMouseMove}
                                        />
                            ))}
                </div>
            </div>
        </React.Fragment>
    )
    
};



export default Grid;