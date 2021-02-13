import * as React from 'react';
import './App.css';
import ListEmployee from "./components/ListEmployee";
import {Container} from "@material-ui/core";

function App() {
  return (
      <React.Fragment>
        <Container fixed>
          <h2>Employee Management System</h2>
          <ListEmployee />
        </Container>
      </React.Fragment>
  );
}

export default App;
