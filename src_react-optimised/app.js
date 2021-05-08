import React, { memo, useState, useCallback, useEffect, useMemo } from "react";

const ExpensiveTree = React.memo(function ({ dispenseCallback }) {
  console.log("ExpensiveTree", dispenseCallback);
  let now = performance.now();
  while (performance.now() - now < 250) {
    // Artificial delay -- do nothing for 250ms
  }
  return <p>I am a very slow component tree.</p>;
});

/*
    Set 2
*/
// function Container2() {
//   console.log("Container2");
//   const [text, setText] = useState(2);
//   const initialColors = useMemo(() => ["red", "green", "yellow"], []);
//   const handleInputChange = useCallback(e => setText(e.target.value), []);
//   const dispenseCallback = useCallback(handleInputChange, []);

//   // const handleInputChange = e => setText(e.target.value);
//   // const dispenseCallback = handleInputChange;

//   return (
//     <div style={{ color: initialColors[Number(text)] }}>
//       {/* <input type="text" value={text} onChange={handleInputChange} /> */}
//       <input type="text" value={text} onChange={dispenseCallback} />
//       <p>Hello</p>
//       <ExpensiveTree dispenseCallback={dispenseCallback} />
//     </div>
//   );
// }

/*
    Set 3
*/
const Bulb = memo(function Bulb({ foo, bar }) {
  //   function Bulb({ foo, bar }) {
  console.log("Bulb");
  const options = { foo, bar };
  useEffect(
    _ => {
      console.log("useEffect", options);
      console.log("useEffect", { foo, bar });
      // }, [options]);
      // },
      // [(foo, bar)]
    },
    [options, foo, bar]
  );
  return <div>Bulb</div>;
  //   }
});
function ParentBulb() {
  // const str = "foo";
  // const num = 2;
  const fun = useCallback(() => {}, []);
  const arr = useMemo(() => [1, 2, 3], []);
  // const fun = () => {};
  // const arr = [1, 2, 3];
  return <Bulb foo={fun} bar={arr} />;
  // return <Bulb foo={str} bar={num} />;\
}

/*
    Set 1
*/
function Container({ children }) {
  console.log("Container");
  const [text, setText] = useState("");
  const handleInputChange = e => setText(e.target.value);
  return (
    <div style={{ color: text }}>
      <input type="text" value={text} onChange={handleInputChange} />
      {children}
    </div>
  );
}

function App() {
  return (
    <Container>
      <p>Hello</p>
      <ParentBulb />
      {/* <Container2 /> */}
      <ExpensiveTree />
    </Container>
  );
}

export default App;
