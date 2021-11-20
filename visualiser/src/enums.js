/**
 * This file contains objects used as enums throughout the app.
 */

const INITIALS_STATUS = {
    SELECTED: "SELECTED",
    TOGGLED: "TOGGLED",
  };

  const STATUS = {
    VISITED: "VISITED",
    START: "START",
    END: "END",
    EMPTY: "EMPTY",
    WALL: "WALL"
};
const STATUS_STYLES = new Map([
    ["VISITED","visited-node"],
    ["START", "source-node"],
    ["END", "destination-node"],
    ["EMPTY","empty-node"],
    ["WALL", "wall-node"] 
])

const CELL_OPTIONS = {
  SOURCE: "Source",
  DESTINATION: "Destination",
}

const ERRORS = {
  MISSING_INITIALS: "Please select initial nodes.",
  MISSING_ALGORITHM: "Please select an algorithm.",
 
}

export {INITIALS_STATUS, STATUS, STATUS_STYLES, CELL_OPTIONS, ERRORS}