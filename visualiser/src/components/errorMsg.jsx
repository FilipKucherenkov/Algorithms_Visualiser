import React from "react";

/**
 * TODO: Add styling and comments
 * @param {*} param0 
 * @returns 
 */
const ErrorMsg = ({message}) => {
    console.log(message);
    return (
        <h1>{message}</h1>
    )
}

export default ErrorMsg;