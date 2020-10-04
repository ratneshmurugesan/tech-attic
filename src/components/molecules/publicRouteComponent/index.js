import React from 'react';
import {
  Route,
} from 'react-router-dom';

const PrivateRouteComponent = ({
  path,
  component,
}) => {
  const Component = component;

  return <Route
    path={path}
    render={props => <Component {...props} />}
  />
};

export default PrivateRouteComponent;
