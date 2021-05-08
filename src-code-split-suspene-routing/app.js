import React, { lazy, Suspense } from "react";
import {
  Switch,
  Link,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

const ButtonComponent = lazy(() =>
  import("experimentalComps/atoms/buttonComponent")
);

const Profile = () => {
  console.log("pro");
  return <div>Profile</div>;
};
const Comments = () => {
  console.log("comm");
  return (
    <>
      <div>Comments</div>
      <ButtonComponent name="RAT" />
    </>
  );
};
const Contact = () => {
  console.log("con");
  return <div>Contact</div>;
};

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Router>
        <Suspense fallback={"Loading..."}>
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
                      <Link to={`${matchedPath}`}>Profile</Link>
                      <Link to={`${matchedPath}/comments`}>Comments</Link>
                      <Link to={`${matchedPath}/contact`}>Contact</Link>
                    </div>
                    <Switch>
                      <Route
                        path={`${matchedPath}`}
                        exact
                        component={Profile}
                      />
                      <Route
                        path={`${matchedPath}/comments`}
                        component={Comments}
                      />
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
