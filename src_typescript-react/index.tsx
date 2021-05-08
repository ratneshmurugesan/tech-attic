import React from "react";
import ReactDOM from "react-dom";

import { Title } from "./components/title";
import { User } from "./components/user";
import TitleWrapper from "./wrappers/title-wrapper";


const App = () => <>
  <Title title="User Details" color="GREEN" />
  <User user={{ name: "Ratnesh", age: 34 }} />
  <TitleWrapper
    onClick={() => window.alert("Title Pressed")}
    title="Wrapped User Details"
    color="RED"
  />
</>

ReactDOM.render(<App />, document.getElementById("root"));
