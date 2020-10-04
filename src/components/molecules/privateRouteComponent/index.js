import React from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation } from 'react-router-dom';

const PrivateRouteComponent = ({
  path,
  component,
  exact
}) => {
  const Component = component;
  const queryParams = new URLSearchParams(useLocation().search);

  return <Route
    exact={exact}
    path={path}
    queryParams={queryParams}
    render={props => <Component {...props} queryParams={queryParams} />}
  />
};

PrivateRouteComponent.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.object.isRequired
  ])
};

export default PrivateRouteComponent;
