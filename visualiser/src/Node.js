export default class Node{
    constructor(row,col, isSource, isDestination, isWall, isVisited, parent){
        this.row = row;
        this.col = col;
        this.isSource = isSource;
        this.isDestination = isDestination;
        this.isWall = isWall;
        this.isVisited = isVisited;
        this.parent = parent;
    }
}