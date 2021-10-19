import { checkForWalls, getChildren } from "./helperFunctions";
import { visualiseAlgorithm } from "./visualiseTools";


const aStar = (grid, sourceNode, destNode) => {
    const priorityQ = [];
    const visited = [];

    priorityQ.push(sourceNode);
    sourceNode.isVisited = true;
    sourceNode.dValue = 0;
    sourceNode.fValue = calculateManhattanDistance(sourceNode,destNode);

    while(priorityQ.length > 0){
        let node = priorityQ.shift();
        visited.push(node);

        if(node === destNode){
            break;
        }
        const children = getChildren(grid, node);

        children.forEach((child) => {
            if(!child.isVisited && checkForWalls(grid, node, child)){
                child.isVisited = true;
                
                let newDValue = node.dValue + 1;
                if( newDValue < child.dValue){
                    child.parent = node;
                    child.dValue = newDValue;
                    child.hValue = calculateManhattanDistance(child, destNode);
                    child.fValue = child.dValue + child.hValue;
                    priorityQ.push(child);
                    priorityQ.sort((a,b) => (a.fValue - b.fValue));
                    visited.push(child);
                }
            }
        });
    }
    return visited;
}

/**
 * Calculate the Manhattan distance between 2 nodes.
 * @param {*} node - source node
 * @param {*} destNode - destination node.
 * @returns 
 */
const calculateManhattanDistance = (node, destNode) => {
    return Math.abs(node.row - destNode.row) + Math.abs(node.col - destNode.col);
}

/**
 * Visualise the A-star algorithm.
 * @param {*} grid 
 * @param {*} sourceNode 
 * @param {*} destNode 
 */
const visualiseAStar = (grid, sourceNode, destNode) =>{
    let visited = aStar(grid, sourceNode, destNode);

    visualiseAlgorithm(destNode,visited);
}

export {visualiseAStar};