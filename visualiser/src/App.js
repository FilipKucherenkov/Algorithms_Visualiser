import { Fragment } from "react";
import './App.css';
import {Helmet} from "react-helmet";
import Grid from "./components/Grid";

function App() {
  return (
    <Fragment>
      <Helmet>
        <style>{"body {background-color:#130A1E;}"}</style>
      </Helmet>
      <Grid />
    </Fragment>
  );
}

export default App;
