import React from 'react';
import Switch from '@material-ui/core/Switch';

export const plugToSwitch = (state, stateValue, toggleSwitchState, viewName) => {
    return (
        <React.Fragment>
            <div>{viewName}:</div>
            <span>OFF</span>
            <Switch size="small" name={viewName} checked={state} onChange={toggleSwitchState} />
            <span>ON</span>
        </React.Fragment>
    );
}