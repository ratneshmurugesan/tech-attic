import React from 'react';
import './index.scss';

import Switch from '@material-ui/core/Switch';

const getContent = () => {
    return (
        <p>
            Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes
            in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes
            in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS
            Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes
            in CSS Shapes in CSS Shapes in CSS
            Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS Shapes in CSS
        </p>
    );
};


export const PlugToSwitch = ({state, toggleSwitchState, viewName}) => {
    return (
        <React.Fragment>
            <div>Shape Feature:</div>
            <span>OFF</span>
            <Switch size="small" name={viewName} checked={state[viewName]} onChange={toggleSwitchState} />
            <span>ON</span>
        </React.Fragment>
    );
} 

const CSSShapes = () => {

    const [state, setSwitchState] = React.useState({ isTriangleChecked: false, isCircleChecked: false, isSquareChecked: false });
    const toggleSwitchState = (e) => {
        let eventTarget = e.target;
        console.log('e', { name: eventTarget.name, check: eventTarget.checked });
        setSwitchState({ ...state, [eventTarget.name]: eventTarget.checked });
    };

    return (
        <React.Fragment>
            <div className="section">
                <div className={`triangle ${state.isTriangleChecked ? '' : 'without-shape-feature'}`}></div>
                {getContent()}
                <PlugToSwitch state={state} toggleSwitchState={toggleSwitchState} viewName='isTriangleChecked' />
            </div>
            <div className="section">
                <div className={`circle ${state.isCircleChecked ? 'without-shape-feature' : ''}`}></div>
                {getContent()}
                <PlugToSwitch state={state} toggleSwitchState={toggleSwitchState} viewName='isCircleChecked' />
            </div>
            <div className="section">
                <div className={`square ${state.isSquareChecked ? 'without-shape-feature' : ''}`}></div>
                {getContent()}
                <PlugToSwitch state={state} toggleSwitchState={toggleSwitchState} viewName='isSquareChecked' />
            </div>
        </React.Fragment>
    )
}

export default (CSSShapes);