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

const dashcard = (state, name, toggleChecked) => {
    return (
        <React.Fragment>
            <div>Shape featue: </div>
            <span>OFF</span>
            <Switch size="small" name={name} checked={state[name]} onChange={toggleChecked} />
            <span>ON</span>
        </React.Fragment>
    );
}

const CSSShapes = () => {

    const [state, setChecked] = React.useState({ isTriangleChecked: false, isCircleChecked: false, isSquareChecked: false });

    const toggleChecked = (e) => {
        setChecked({ ...state, [e.target.name]: e.target.checked });
    };

    return (
        <React.Fragment>
            <div className="section">
                <div className={`triangle ${state.isTriangleChecked ? '' : 'without-shape-feature'}`}></div>
                {getContent()}
                {dashcard(state, 'isTriangleChecked', toggleChecked)}
            </div>
            <div className="section">
                <div className={`circle ${state.isCircleChecked ? 'without-shape-feature' : ''}`}></div>
                {getContent()}
                {dashcard(state, 'isCircleChecked', toggleChecked)}
            </div>
            <div className="section">
                <div className={`square ${state.isSquareChecked ? 'without-shape-feature' : ''}`}></div>
                {getContent()}
                {dashcard(state, 'isSquareChecked', toggleChecked)}
            </div>
        </React.Fragment>
    )
}

export default (CSSShapes);