import React from "react";
import "../styles/error-style.css";
/**
 * TODO: Add styling and comments
 * @param {*} param0 
 * @returns 
 */
const ErrorMsg = ({message}) => {
    console.log(message);
    return (
        <div className="error-container">
            <div className="cross-container">
                <img src="red-cross.png" width="30" height="30" className="cross-style"/>
            </div>
            <div>
                <p className="message-style">{message}</p>
            </div>
            
        </div>
        
    )
}

export default ErrorMsg;