import React from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import getTheme from 'themes';

import PrivateRouteComponent from 'components/molecules/privateRouteComponent';
import {
	TimesheetUserContainer,
} from 'containers';
import { 
	// routeEnums, 
	generateURL } from 'constants/routeConstants';

const RoutesComponent = _ => (
	<Switch>
		<ThemeProvider theme={getTheme('SONIC')}>
			<PrivateRouteComponent
				path={generateURL('timeSheetChange')}
				component={TimesheetUserContainer}
			/>
		</ThemeProvider>
	</Switch>
);

export default RoutesComponent;
