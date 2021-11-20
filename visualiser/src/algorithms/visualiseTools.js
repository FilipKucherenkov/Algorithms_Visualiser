 //**************************************************************//
 //This file contains functions used for Algorithm Visualisation.//
 //***************************************************************/                                        

/**
 * Visualise the Breadth-First Search algorithm.
 * @param {*} grid 
 * @param {*} sourceNode 
 * @param {*} destNode 
 */
 const visualiseAlgorithm =  (destNode, visitedNodes) => {
    
    

    /**
     * Helper function build the shortest path from the source node to the destination node
     * @param {*} destNode - the destination node.
     * @returns an array with the shortest path.
     */
    const buildShortestPath = (destNode) => {
        let shortestPath = [];
        let current = destNode;

        while(current != null){
            shortestPath.push(current);
            current = current.parent;
        }
        shortestPath.pop();
        return shortestPath.reverse();
    }
   
    /**
     * Helper function to visualise the shortest path
     * between the source node and the destination node.
     * @param {*} shortestPath 
     */
    const visualiseShortestPath =  (shortestPath) => {
            const updateColor = (start, end, shortestPath) => {
                if (start < end) {
                  window.requestAnimationFrame(() => {
                    let node = shortestPath[start];
                    
                    if(!node.isSource && !node.isDestination){
                      let divNode = document.getElementById(`${node.row}-${node.col}`);
                      divNode.classList.remove("visited-node");
                      divNode.classList.add("path-node");
                    }
                    updateColor(start + 1, end, shortestPath);
                  });
                  return;
                }
            }
            updateColor(0,shortestPath.length-1,shortestPath);
    }
    /**
     * Helper function to visualise the visited nodes in
     * the order of visit.
     * @param {*} visitedNodes 
     */
    const visualiseVisitedNodes =  (visitedNodes) =>{

        const updateColor = (start, end, visitedNodes) => {
            if (start <= end) {
                if(start === end){ // when visualisation of the visited nodes finishes, start visualising the shortest path.
                    let shortestPath = buildShortestPath(destNode);
                    visualiseShortestPath(shortestPath)
                    return;
                }
                window.requestAnimationFrame(() => {
                let node = visitedNodes[start];
                
                if(!node.isSource && !node.isDestination){
                  let divNode = document.getElementById(`${node.row}-${node.col}`);
                  divNode.classList.remove("empty-node");
                  divNode.classList.add("visited-node");
                }
                updateColor(start + 1, end, visitedNodes);
              });
              return;
            }
        }
        updateColor(0,visitedNodes.length-1,visitedNodes);   
}

  visualiseVisitedNodes(visitedNodes); 
}

export {visualiseAlgorithm};