import React from 'react';
import './index.scss';

// import Switch from '@material-ui/core/Switch';

import { plugToSwitch } from '../../utils';

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

const CSSShapes = () => {

    const [state, setSwitchState] = React.useState({ isTriangleChecked: false, isCircleChecked: false, isSquareChecked: false });
    const viewName = 'Shape feature';
    const toggleSwitchState = (e) => {
        setSwitchState({ ...state, [e.target.name]: e.target.checked });
    };

    return (
        <React.Fragment>
            <div className="section">
                <div className={`triangle ${state.isTriangleChecked ? '' : 'without-shape-feature'}`}></div>
                {getContent()}
                {plugToSwitch(state, 'isTriangleChecked', toggleSwitchState, viewName)}
            </div>
            <div className="section">
                <div className={`circle ${state.isCircleChecked ? 'without-shape-feature' : ''}`}></div>
                {getContent()}
                {plugToSwitch(state, 'isCircleChecked', toggleSwitchState, viewName)}
            </div>
            <div className="section">
                <div className={`square ${state.isSquareChecked ? 'without-shape-feature' : ''}`}></div>
                {getContent()}
                {plugToSwitch(state, 'isSquareChecked', toggleSwitchState, viewName)}
            </div>
        </React.Fragment>
    )
}

export default (CSSShapes);