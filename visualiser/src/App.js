import React from "react";
import './App.css';
import NavBar from "./components/Navbar";
import {Helmet} from "react-helmet";
import Grid from "./components/Grid";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <style>{"body {background-color:#130A1E;}"}</style>
      </Helmet>
      <NavBar/>

      <Grid rows={25} cols={25}/>
    </React.Fragment>
  );
}

export default App;
