
 //*************************************************************************//
 //This file contains helper functions used for the implemented algorithms. //
 //*************************************************************************//         


/**
 * Check if there are walls on the way to the destination node.
 * @param {*} grid - grid.
 * @param {*} sourceNode - current node.
 * @param {*} destNode - child to be checked.
 * @returns 
 */
 const checkForWalls = (grid, sourceNode, destNode) => {
    if(destNode.isWall){
        return false;
    }  
    if(grid[sourceNode.row][destNode.col].isWall && grid[destNode.row][sourceNode.col].isWall ){
        return false;
    }
    return true;
}

/**
 * Helper method to get the valid children of a given node.
 * @param {*} grid - the grid.
 * @param {*} currentNode - the given node.
 * @returns an array with all the valid children of the given node.
 */
 const getChildren = (grid, currentNode) =>{
    
    let row = currentNode.row;
    let col = currentNode.col;

    let children = [];

    // left 
    if(isValid(grid, row, col-1)){
        children.push(grid[row][col-1]);
    }  
    //up - left
    if(isValid(grid, row-1, col-1)){
        children.push(grid[row-1][col-1]);
    }
    // right 
    if(isValid(grid, row, col+1)){
        children.push(grid[row][col+1]);
    }
    //up - right
    if(isValid(grid, row-1, col+1)){
        children.push(grid[row-1][col+1]);
    }
    // up 
    if(isValid(grid, row -1, col)){
        children.push(grid[row-1][col]);
    }
    //down -left 
    if(isValid(grid, row+1, col-1)){
        children.push(grid[row+1][col-1]);
    }
    // down 
    if(isValid(grid, row+1, col)){
        children.push(grid[row+1][col]);
    }
    //down - right
    if(isValid(grid, row+1, col+1)){
        children.push(grid[row+1][col+1]);
    }

    return children;
}

/**
 * Helper method to check if a node is valid (whether is in bounds of the grid.)
 * @param {*} grid - the grid.
 * @param {*} row - row of the given node.
 * @param {*} col - col of the given node.
 * @returns true if it is valid and false otherwise.
 */
 const isValid = (grid, row, col) =>{
    return row >= 0 && col>=0 && row < grid.length && col < grid[row].length;
}


export {getChildren, checkForWalls, isValid};