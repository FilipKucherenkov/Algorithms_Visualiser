import React from "react";

import {INITIALS_STATUS, STATUS, STATUS_STYLES, CELL_OPTIONS} from "../enums";

const Cell = ({isWall,isSource,isDestination,row,col, handleClickOnCell, startStatus, setStartStatus, destStatus, setDestStatus,id}) => {
    
    let cellStyle = ""
    if(isSource)cellStyle = STATUS_STYLES.get(STATUS.START) ? STATUS_STYLES.get(STATUS.START) : cellStyle
    if(isDestination) cellStyle = STATUS_STYLES.get(STATUS.END) ? STATUS_STYLES.get(STATUS.END) : cellStyle
    //if(isVisited) cellStyle = STATUS.VISITED;  
    if(isWall) cellStyle = STATUS_STYLES.get(STATUS.WALL) ? STATUS_STYLES.get(STATUS.WALL) : cellStyle
    
      
    return (
        <div 
            id = {id}
            className = {`cell-style ${cellStyle}`}   //change style according status
            onClick={(event) =>{
                if(startStatus === INITIALS_STATUS.TOGGLED){
                    setStartStatus(INITIALS_STATUS.SELECTED);
                    handleClickOnCell(event, row, col, CELL_OPTIONS.SOURCE);
                    return;
                }
                if(destStatus === INITIALS_STATUS.TOGGLED && startStatus === INITIALS_STATUS.SELECTED){
                    setDestStatus(INITIALS_STATUS.SELECTED);
                    handleClickOnCell(event, row, col, CELL_OPTIONS.DESTINATION);
                    return;
                }
            }}

        >  

        </div>
    )
};


export default Cell;