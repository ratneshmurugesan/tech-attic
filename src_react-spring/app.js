import React from "react";

import "./app.scss";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";

function App() {
  return (
    <div className="App">
      {/* <h1>REACT SPRING</h1> */}
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default App;
