export default class Node{
    constructor(row,col, isSource, isDestination, isWall, isVisited, dValue, hValue, fValue, parent){
        this.row = row;
        this.col = col;
        this.isSource = isSource;
        this.isDestination = isDestination;
        this.isWall = isWall;
        this.isVisited = isVisited;
        this.dValue = dValue;
        this.hValue = hValue;
        this.fValue = fValue;
        this.parent = parent;
    }
}