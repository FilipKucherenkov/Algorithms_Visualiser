import { checkForWalls, getChildren } from "./helperFunctions";
import { visualiseAlgorithm } from "./visualiseTools";

/**
 * Breadth-First Search Algorithm.
 * @param {*} grid - The grid
 * @param {*} sourceNode - the source node.
 * @param {*} destNode  - the destination node.
 * @returns an array with all visited nodes.
 */
const bfs = (grid, sourceNode, destNode) => {
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

        let children = getChildren(grid, current, visited);
        
        children.forEach((child) => {
            if(!child.isVisited && checkForWalls(grid, current, child)){
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
 * Visualise the execution of the Breadth-First-Search algorithm.
 * @param {*} grid 
 * @param {*} sourceNode 
 * @param {*} destNode 
 */
const visualiseBfs = (grid, sourceNode, destNode) =>{
    let visitedNodes = bfs(grid, sourceNode, destNode);
    visualiseAlgorithm(grid, sourceNode, destNode, visitedNodes);
}


export {visualiseBfs};