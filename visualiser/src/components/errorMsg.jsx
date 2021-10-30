import React from "react";
import "../styles/error-style.css";

/**
 * Component for custom error message. 
 */
const ErrorMsg = ({message}) => {
    return (
        <div className="error-container">
            <div className="cross-container">
                <img src="red-cross.png" width="30" height="30" className="cross-style"/>
            </div>
            <div className="message-container">
                <p className="message-style">{message}</p>
            </div>   
        </div>     
    )
}

export default ErrorMsg;