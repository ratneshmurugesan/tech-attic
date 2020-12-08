import React from "react";
import PropTypes from "prop-types";

import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import { BASE_DASHBOARD } from "constants/urlConstants";
import { DASHBOARD_LINKS } from "constants/dashboardConstants";

import GridMenuExample from "components/2molecules/pgGridMenu";
import SidebarMenu from "components/2molecules/SidebarMenu";

function RoutesComp({ history }) {
  console.log({ BASE_DASHBOARD });
  return (
    <>
      <Switch>
        {/* <Route
          exact
          path={"/"}
          component={() => <Redirect to={BASE_DASHBOARD} />}
        /> */}
        <Route
          exact
          path={BASE_DASHBOARD}
          component={() => (
            <GridMenuExample history={history} items={DASHBOARD_LINKS} />
          )}
        />
        {DASHBOARD_LINKS.map(
          dashboardObj =>
            dashboardObj.isEnabled && (
              <Route
                key={dashboardObj.pageKey}
                exact
                path={dashboardObj.url}
                component={() => (
                  <>
                    <SidebarMenu />
                    <dashboardObj.ContextWrapper>
                      <dashboardObj.Dashboard />
                    </dashboardObj.ContextWrapper>
                  </>
                )}
              />
            )
        )}
      </Switch>
    </>
  );
}

RoutesComp.defaultProps = {
  history: {},
};

RoutesComp.propTypes = {
  history: PropTypes.object,
};

export default withRouter(RoutesComp);
