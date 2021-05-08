import React from "react";
import {
  Switch,
  Link,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

const Profile = () => {
  console.log("pro");
  return <div>Profile</div>;
};
const Comments = () => {
  console.log("comm");
  return <div>Comments</div>;
};
const Contact = () => {
  console.log("con");
  return <div>Contact</div>;
};

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Router>
        <Switch>
          <Route
            path="/home"
            component={({ match }) => {
              const matchedPath = match.path;
              console.log("home route", matchedPath);
              return (
                <div>
                  <h1>HOME</h1>
                  <div>
                    <Link to={`${matchedPath}/profile`}>Profile</Link>
                    <Link to={`${matchedPath}`}>Comments</Link>
                    <Link to={`${matchedPath}/contact`}>Contact</Link>
                  </div>
                  <Switch>
                    <Route
                      path={`${matchedPath}/profile`}
                      exact
                      component={Profile}
                    />
                    <Route path={`${matchedPath}`} component={Comments} />
                    <Route
                      path={`${matchedPath}/contact`}
                      component={Contact}
                    />
                  </Switch>
                </div>
              );
            }}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
