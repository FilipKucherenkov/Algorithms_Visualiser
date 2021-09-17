import React from "react";
import './App.css';
import {Helmet} from "react-helmet";
import Grid from "./components/Grid";




function App() {

  return (
    <React.Fragment>
      <Helmet>
        <style>{"body {background-color:#130A1E;}"}</style>
      </Helmet>

      <Grid 
        rows={25} 
        cols={25}/>

    </React.Fragment>
  );
}

export default App;
