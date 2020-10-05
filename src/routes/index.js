import React from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import getTheme from 'themes';

import PrivateRouteComponent from 'components/2molecules/privateRouteComponent';

import CustomGrid from 'components/3organisms/CustomGrid';

import {
	routeConfigObj
} from 'config/routeConfig';

const RoutesComponent = _ => {
	const routeKeys = Object.keys(routeConfigObj);
	return (
		<Switch>
			<ThemeProvider theme={getTheme('SONIC')}>
				<>
					{
						routeKeys.map(routeDatum => {
							const routeObj = routeConfigObj[routeDatum];
							console.log('routeObj', routeObj);
							const path = routeObj.path;
							const displayName = routeObj.displayName;
							const container = routeObj.container || null;
							const page = routeObj.page;
							const key = routeObj.key;
							return (
								<div key={key}>
									<PrivateRouteComponent
										path={path}
										exact
										component={container || page}
										isPage={container ? false : true}
										displayName={displayName}
										CustomGrid={CustomGrid}
									/>
								</div>
							)
						})
					}
				</>
			</ThemeProvider>
		</Switch>
	)
};

export default RoutesComponent;
