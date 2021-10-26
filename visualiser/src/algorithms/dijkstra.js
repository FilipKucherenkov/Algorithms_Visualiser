import { checkForWalls, getChildren } from "./helperFunctions";
import { visualiseAlgorithm } from "./visualiseTools";


const dijkstra = (grid, sourceNode, destNode) => {
    const priorityQ = [];
    const visited = [];

    priorityQ.push(sourceNode);
    sourceNode.isVisited = true;
    sourceNode.dValue = 0;
   
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
                    priorityQ.push(child);
                    priorityQ.sort((a,b) => (a.dValue - b.dValue));
                    visited.push(child);
                }
            }
        });
    }
    return visited;
}

/**
 * Visualise the Dijkstra algorithm.
 * @param {*} grid 
 * @param {*} sourceNode 
 * @param {*} destNode 
 */
const visualiseDijkstra = (grid, sourceNode, destNode) =>{
    let visited = dijkstra(grid, sourceNode, destNode);
    visualiseAlgorithm(destNode,visited);
}

export {visualiseDijkstra};