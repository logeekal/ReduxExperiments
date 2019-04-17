import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup"

import {store} from './store';



class App extends Component {
  // Removing the state from here.. we will now manage this state with Redux
  // state = {
  //   tech: "React"
  // };
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />
      , <ButtonGroup key={2} technologies={["React", "Elm", "Redux"]} />
    ];
  }
}

export default App;
