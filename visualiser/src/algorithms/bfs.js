import { visualiseAlgorithm } from "./visualiseTools";

/**
 * Breadth-First Search Algorithm.
 * @param {*} matrix - The grid
 * @param {*} sourceNode - the source node.
 * @param {*} destNode  - the destination node.
 * @returns an array with all visited nodes.
 */
const bfs = (matrix, sourceNode, destNode) => {
    let queue = [];
    let visited = [];

    queue.push(sourceNode);
    sourceNode.isVisited = true;

    while(queue.length !== 0){
        let current = queue.shift();
        
        //set node as visited.
        visited.push(current);

        if(current === destNode){
            console.log("Finished");
            break;
        }

        let children = getChildren(matrix, current, visited);
        
        children.forEach((child) => {
            if(!child.isVisited && !child.isWall){
                child.parent = current;
                child.isVisited = true;
                queue.push(child);
            }
        })
    }
    //We don't need the source for the sake of visualisation.
    visited.shift();
    return visited;  
}

/**
 * Helper method to get the valid children of a given node.
 * @param {*} matrix - the grid.
 * @param {*} currentNode - the given node.
 * @returns an array with all the valid children of the given node.
 */
const getChildren = (matrix, currentNode) =>{
    
    let row = currentNode.row;
    let col = currentNode.col;

    let children = [];

    // left 
    if(isValid(matrix, row, col-1)){
        children.push(matrix[row][col-1]);
    }

    // right 
    if(isValid(matrix, row, col+1)){
        children.push(matrix[row][col+1]);
    }

    // up 
    if(isValid(matrix, row -1, col)){
        children.push(matrix[row-1][col]);
    }

    // down 
    if(isValid(matrix, row+1, col)){
        children.push(matrix[row+1][col]);
    }

    return children;

}

/**
 * Helper method to check if a node is valid (whether is in bounds of the grid.)
 * @param {*} matrix - the grid.
 * @param {*} row - row of the given node.
 * @param {*} col - col of the given node.
 * @returns true if it is valid and false otherwise.
 */
const isValid = (matrix, row, col) =>{
    return row >= 0 && col>=0 && row < matrix.length && col < matrix[row].length;
}

const visualiseBfs = (grid, sourceNode, destNode) =>{
    let visitedNodes = bfs(grid, sourceNode, destNode);
    visualiseAlgorithm(grid, sourceNode, destNode, visitedNodes);
}


export {visualiseBfs};