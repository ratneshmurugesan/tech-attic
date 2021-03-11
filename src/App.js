import React from "react";
// import React, { useCallback, useEffect, useMemo, useState, memo } from "react";

import {
  BrowserRouter as Router,
  // Route,
  Switch,
} from "react-router-dom";

import "./App.scss";

import ScreenResizerContext from "context/ScreenResizerContext";
import RoutesComponent from "routes";

function App() {
  return (
    <ScreenResizerContext.Wrapper>
      <div className="App">
        <Router>
          <Switch>
            <RoutesComponent />
          </Switch>
        </Router>
      </div>
    </ScreenResizerContext.Wrapper>
  );
}

// function Container({ children }) {
//   console.log("Container");
//   const [text, setText] = useState("");
//   const handleInputChange = e => setText(e.target.value);
//   return (
//     <div style={{ color: text }}>
//       <input type="text" value={text} onChange={handleInputChange} />
//       {children}
//     </div>
//   );
// }

// const ExpensiveTree = React.memo(function ({ dispenseCallback }) {
//   console.log("ExpensiveTree", dispenseCallback);
//   let now = performance.now();
//   while (performance.now() - now < 250) {
//     // Artificial delay -- do nothing for 250ms
//   }
//   return <p>I am a very slow component tree.</p>;
// });

// const Bulb = memo(function Bulb({ foo, bar }) {
// function Bulb({ foo, bar }) {
// console.log("Bulb");
// const options = { foo, bar };
// useEffect(
// _ => {
// console.log("useEffect", options);
// console.log("useEffect", { foo, bar });
// },
// [options]
// [foo, bar]
// );
// return <div>Bulb</div>;
// }
// });

// function App() {
// return (
//   <Container>
//     <p>Hello</p>
//     <ExpensiveTree />
//   </Container>
// );
// console.log("App");
// const [text, setText] = useState(2);
// const initialColors = useMemo(() => ["red", "green", "yellow"], []);

// const handleInputChange = useCallback(e => setText(e.target.value), []);
// const handleInputChange = e => setText(e.target.value);
// const dispenseCallback = useCallback(handleInputChange, []);
// const dispenseCallback = handleInputChange;

// return (
// <div style={{ color: initialColors[Number(text)] }}>
// {
/* <input type="text" value={text} onChange={handleInputChange} /> */
// }
//   <input type="text" value={text} onChange={dispenseCallback} />
//   <p>Hello</p>
//   <ExpensiveTree dispenseCallback={dispenseCallback} />
// </div>
// );

// const str = "foo";
// const num = 2;
// const fun = useCallback(() => {}, []);
// const arr = useMemo(() => [1, 2, 3], []);
// const fun = () => {};
// const arr = [1, 2, 3];

// return (
//   <>
//     <input type="text" value={text} onChange={handleInputChange} />
//     <Bulb
// foo={fun} bar={arr}
//       foo={str}
//       bar={num}
//     />
//   </>
// );
// }
export default App;
