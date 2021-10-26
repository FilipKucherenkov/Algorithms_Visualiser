import { isValid } from "./helperFunctions";

/**
 * Iterative version of Depth-First-Search algorithm for maze generation.
 * @param {*} grid - grid with all nodes set to walls.
 * @param {*} sourceNode - start node.
 * @returns - new grid with maze.
 */
const dfs = (grid, sourceNode) => {
    let stack = [];
    sourceNode.isVisited = true;
    stack.push(sourceNode);

    while(stack.length > 0){
        let currentNode = stack.pop();
        
        let children = getNeighbours(grid, currentNode);
        if(children.length > 0){
            stack.push(currentNode);
            let child = children[Math.floor(Math.random() * children.length)]
            
            currentNode.isWall = false;
            child.isWall = false;
            
            if(currentNode.row === child.row && currentNode.col > child.col){ // wall is on the left
                let wallNode = grid[currentNode.row][currentNode.col-1];
                wallNode.isWall = false; 
            }else if(currentNode.row === child.row && currentNode.col < child.col){ // wall is on the right
                let wallNode = grid[currentNode.row][child.col-1];
                wallNode.isWall = false; 
            }else if(currentNode.col === child.col && currentNode.row > child.row){ // wall is up
                let wallNode = grid[currentNode.row-1][child.col];
                wallNode.isWall = false; 

            }else if(currentNode.col === child.col && currentNode.row < child.row){ // wall is down
                let wallNode = grid[child.row-1][child.col];
                wallNode.isWall = false; 
            }
            child.isVisited = true;
            stack.push(child);
        }
    }

    
    return resetNodeVisitedStatus(grid);
}

/**
 * Helper method to unvisit all nodes explored with dfs.
 * @param {*} grid 
 * @returns a new grid with all nodes unvisited.
 */
const resetNodeVisitedStatus = (grid) => {
    for(let row = 0;row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            grid[row][col].isVisited = false;
        }
    }
    return grid;
}

/**
 * Helper method to get the valid children of a given node.
 * @param {*} grid - the grid.
 * @param {*} currentNode - the given node.
 * @returns an array with all the valid children of the given node.
 */
 const getNeighbours = (grid, currentNode) =>{
    
    let row = currentNode.row;
    let col = currentNode.col;

    let children = [];
    // left 
    if(isValid(grid, row, col-2) && !grid[row][col-2].isVisited ){
        children.push(grid[row][col-2]);
    }
    // right 
    if(isValid(grid, row, col+2) && !grid[row][col+2].isVisited){
        children.push(grid[row][col+2]);
    } 
    // up 
    if(isValid(grid, row -2, col) && !grid[row-2][col].isVisited){
        children.push(grid[row-2][col]);
    }
    // down 
    if(isValid(grid, row+2, col) && !grid[row+2][col].isVisited){
        children.push(grid[row+2][col]);
    }
    return children;
}

export {dfs};
