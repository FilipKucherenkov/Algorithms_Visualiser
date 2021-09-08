import React from "react";
import './App.css';
import NavBar from "./components/Navbar";
import {Helmet} from "react-helmet";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <style>{"body {background-color:#130A1E;}"}</style>
      </Helmet>
      <NavBar/>
    </React.Fragment>
  );
}

export default App;
