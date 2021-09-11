import React from "react";

import { useState} from "react";
import { useEffect } from "react/cjs/react.development";

const STATUS = {
    VISITED: "VISITED",
    START: "START",
    END: "END",
    EMPTY: "EMPTY",
    WALL: "WALL"
};
const STATUS_STYLES = new Map([
    ["VISITED","yellow"],
    ["START", "green"],
    ["END", "RED"],
    ["EMPTY","white"],
    ["WALL", "black"] 
])

const Cell = ({id, setLastClicked, startStatus ,setStartStatus,isResetClicked}) => {
    const [status, setStatus] = useState(STATUS.EMPTY);
    
    useEffect(() => {
        setStatus(STATUS.EMPTY);
    },[isResetClicked])
    
    return (
     
        <div 
            id={id}
            onClick = {(e) =>{
                setLastClicked(e.target.id);
                console.log(startStatus);
                if(startStatus ==="CLICKED"){
                    setStatus(STATUS.START);
                    setStartStatus("SELECTED");
                    
                }
                console.log(e.target.id);
            }}
            className = "cell-style" style={{backgroundColor: STATUS_STYLES.get(status)}}>x</div>    // change style according status
    )
};


export default Cell;