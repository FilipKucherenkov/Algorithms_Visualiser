import React from "react";
import "../styles/error-style.css";

/**
 * Component for custom error message. 
 */
const ErrorMsg = ({message, handleMinimise}) => {
    return (
        <div className="error-container">
            <p className="message-style">{message}</p>
            <button className="cross-button" onClick={() => handleMinimise(true)} aria-label="Close">
                <span className="cross">×</span>
            </button>
        </div>      
    )
}

export default ErrorMsg;