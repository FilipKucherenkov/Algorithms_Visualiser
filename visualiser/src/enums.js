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
    ["VISITED","yellow"],
    ["START", "green"],
    ["END", "RED"],
    ["EMPTY","white"],
    ["WALL", "black"] 
])

const CELL_OPTIONS = {
  SOURCE: "Source",
  DESTINATION: "Destination",
}

export {INITIALS_STATUS, STATUS, STATUS_STYLES, CELL_OPTIONS}