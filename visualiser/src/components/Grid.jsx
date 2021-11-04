
import React, {useState } from "react";
import "../styles/grid-style.css";
import "../styles/navigation-style.css"
import Node from "../Node";
import Cell from "./Cell";
import { useEffect } from "react/cjs/react.development";
import { INITIALS_STATUS, CELL_OPTIONS, ERRORS } from "../enums";
import {visualiseBfs} from "../algorithms/bfs";
import { visualiseAStar } from "../algorithms/aStar";
import { dfs } from "../algorithms/dfs";
import { visualiseDijkstra } from "../algorithms/dijkstra";
import ErrorMsg from "./errorMsg";


const Grid = ({rows, cols}) => {
    const [grid, setGrid] = useState([]);
    const [startStatus, setStartStatus] = useState(null);
    const [destStatus, setDestStatus] = useState(null);

    const [selectedAlgo, setSelectedAlgo] = useState(null);
    const [sourceNode, setSourceNode] = useState(null);
    const [destNode, setDestNode] = useState(null);

    const [isMouseDown, setMouseDown] = useState(false);

    const [areInitialsSelected, setInitials] = useState(null);


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
                    let newNode = new Node(row, col, false, false, false, false, Infinity, 0, Infinity, null);
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
                    return new Node(node.row,node.col, false, false, false, false, Infinity, 0, Infinity, null);
                })
            })
        })
        setStartStatus(null);
        setDestStatus(null);
        setSourceNode(null);
        setDestNode(null);
    }
    
    /**
     * Record that the mouse button has been released.
     */
    const handleMouseDown = () => {
        setMouseDown(true);
    }

    /**
     * Record that the mouse button has been released.
     */
    const handleMouseUp = () => {
        setMouseDown(false);
    }

    /**
     * When the mouse has been pressed and moved, set the target node (those that the mouse goes over)
     * to a wall node.
     * @param {*} targetRow - row of the selected node.
     * @param {*} targetCol - col of the selected node.
     */
    const handleMouseMove = (targetRow, targetCol) => {
        if(!isMouseDown){
            return;
        }
        setGrid((currentState) => {
            return currentState.map((row) => {
                return row.map((node) => {
                    if(startStatus === INITIALS_STATUS.TOGGLED || destStatus === INITIALS_STATUS.TOGGLED){
                        // select a source or dest nodes first before placing a wall.
                        return node;
                    }
                      
                    if(node.row === targetRow && node.col === targetCol && !node.isSource && !node.isDestination){
                        return new Node(node.row,node.col, false, false, true, false, Infinity, 0, Infinity, null);
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
        if(startStatus === null){
            setStartStatus(INITIALS_STATUS.TOGGLED);
        }
        if(startStatus === INITIALS_STATUS.SELECTED){
            //TODO: Add a message that source has already been selected
            console.log("Selected");
        }
    }

    /**
     * Mark the destination cell.
     * @param {*} event 
     */
    const handlePlaceDestination = (event) =>{
        if(destStatus === null){
            setDestStatus(INITIALS_STATUS.TOGGLED);
        }
        if(destStatus === INITIALS_STATUS.SELECTED){
            //TODO: Add a message that destination has already been selected
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
                    if(node.row === targetRow && node.col === targetCol && !node.isSource){
                        switch(targetType){
                            case CELL_OPTIONS.SOURCE:
                                let source =  new Node(targetRow,targetCol, true, false, false, false, Infinity, 0, Infinity, null);
                                setSourceNode(source);
                                return source;

                            case CELL_OPTIONS.DESTINATION:
                                let dest =  new Node(targetRow,targetCol, false, true, false, false, Infinity, 0, Infinity, null);
                                setDestNode(dest);
                                setInitials(true);
                                return dest;

                            default:
                                //TODO: display a error here.
                        }
                    }
                    return node;
                })
            })
        })
    }
    
    /**
     * Handle run button. Start the selected algorithm.
     * @returns 
     */
    const handleRun = () =>{  
        if(sourceNode === null || destNode === null){
           setInitials(false);
           return;
        }
        
        switch(selectedAlgo){
            case "Breadth-First Search":
                visualiseBfs(grid,sourceNode,destNode);      
                console.log(grid);
                break;
            case "Dijkstra":
                visualiseDijkstra(grid, sourceNode, destNode);
                break;
            case "A-Star":
                visualiseAStar(grid, sourceNode, destNode);
                break;
            default:
                //TODO: display a error here.
        }
    }

    /**
     * Handle maze generation button. Reset the grid, set all nodes to walls and generate the maze.
     */
    const handleMazeGeneration = () => {
        handleReset();
        // set all nodes to walls.
        const gridWithtWalls =  grid.map((row) => {
                return row.map((node) => {
                    return new Node(node.row,node.col, false, false, true, false, Infinity, 0, Infinity, null);
                })
        })
        let newGrid = dfs(gridWithtWalls, grid[0][0]);
        setGrid(newGrid);  
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
            {/* TODO: Design a custom error and fix implementation. Maybe use enums again*/}
            <div className="error-message">
                {areInitialsSelected===false && <ErrorMsg message={ERRORS.MISSING_INITIALS}></ErrorMsg>}
            </div>
            
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
                    onClick={(event) => {handleMazeGeneration()}}
                >Generate Maze</button>
                <button 
                    className="button bounce"
                    style={{animationDelay: "0.28s"}}
                    onClick={() => handleReset()}
                >Reset Board</button>
                <button 
                    className="button bounce" 
                    onClick = {(event)=>{
                        handlePlaceStart(event);
                    }}
                    // If button is being disabled change it's color
                    style={(startStatus === INITIALS_STATUS.TOGGLED && {color: "#000000", backgroundColor: "#FFFFFF"}) || {animationDelay: "0.35s"}} 
                    disabled = {startStatus === INITIALS_STATUS.TOGGLED}
                >Place start</button>
                <button 
                    className="button bounce" 
                    onClick={(event) => {
                        handlePlaceDestination(event);
                    }}
                    // If button is being disabled change it's color
                    style={(destStatus === INITIALS_STATUS.TOGGLED && {color: "#000000", backgroundColor: "#FFFFFF"}) || {animationDelay: "0.42"}} 
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