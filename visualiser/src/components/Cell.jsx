import React from "react";
import { useState} from "react";
import { useEffect } from "react/cjs/react.development";

import {INITIALS_STATUS, STATUS, STATUS_STYLES, CELL_OPTIONS} from "../enums";

const Cell = ({isVisited,isWall,isSource,isDestination,row,col, handleClickOnCell, startStatus, setStartStatus, destStatus, setDestStatus}) => {
    const [status, setStatus] = useState(STATUS.EMPTY);

    useEffect(()=> {
        if(isVisited){
            setStatus(STATUS.VISITED);
            return;
        }
        if(isWall){
            setStatus(STATUS.WALL);
            return;
        }
        if(isSource){
            setStatus(STATUS.START);
            return;
        }
        if(isDestination){
            setStatus(STATUS.END);
            return;
        }
        setStatus(STATUS.EMPTY)
    },[isVisited,isWall,isSource, isDestination])
    
    
    return (
        <div 
            className = "cell-style" 
            style={{backgroundColor: STATUS_STYLES.get(status)}} //change style according status
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