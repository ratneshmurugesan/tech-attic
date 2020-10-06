import React from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation } from 'react-router-dom';

import InfoComponent from 'components/2molecules/infoComponent';

const PrivateRouteComponent = ({
  path,
  component,
  exact,
  isPage,
  displayName,
  CustomGrid,
}) => {
  // console.log('PrivateRouteComponent', {
  //   path,
  //   component,
  //   exact,
  //   isPage,
  //   displayName
  // });
  const Component = component;
  const queryParams = new URLSearchParams(useLocation().search);
  if(isPage) {
      return <Route
        exact={exact}
        path={path}
        queryParams={queryParams}
        render={props => {
          return(
          (
            <Component {...props} queryParams={queryParams} />
          ) 
          )
        }
        }
      />
  } else {
    return <Route
      exact={exact}
      path={path}
      queryParams={queryParams}
      render={_ => {
        return (
          <>
          <CustomGrid />
          <InfoComponent
            displayName={displayName}
              component={Component}
              // {...props}
          />
          </>
        )
      }
      }
    />

  }

};

PrivateRouteComponent.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object
  ])
};

export default PrivateRouteComponent;