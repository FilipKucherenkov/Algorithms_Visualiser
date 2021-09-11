import React, { useState } from "react";
import './App.css';
import NavBar from "./components/Navbar";
import {Helmet} from "react-helmet";
import Grid from "./components/Grid";


const SELECT_STATUS = {
  CLICKED: "CLICKED",
  SELECTED: "SELECTED",
}

function App() {
  const [startStatus, setStartStatus] = useState(null);
  const [lastClicked, setLastClicked] = useState("");

  const [isResetClicked, setResetClicked] = useState(false);

  return (
    <React.Fragment>
      <Helmet>
        <style>{"body {background-color:#130A1E;}"}</style>
      </Helmet>
      <NavBar 
        startStatus={startStatus} 
        setStartStatus={setStartStatus} 
        setLastClicked={setLastClicked} 
        setResetClicked={setResetClicked}

      />

      <Grid 
        rows={25} 
        cols={25} 
        startStatus={startStatus} 
        setStartStatus={setStartStatus}
        isResetClicked = {isResetClicked}
        setResetClicked={setResetClicked}
      />

    </React.Fragment>
  );
}

export default App;
