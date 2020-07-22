import React from 'react';
import './index.scss';

const CSSTransitions = () => {

    //Critical Rendering Path
    return (
        // <div className="section">
        //    <p className="font">CSS Transitions</p>
        //    <div className="styles">Styles<p>Styles are recalulated here!</p></div>
        //    <div className="layout">Layout<p>Shapes(width / height) and positions(left, right, etc) are generated here!</p></div>
        //    <div className="paint">Paint<p>Pixels are added for elements here using bg-color, box-shadow and etc!</p></div>
        //    <div className="composite">Composite<p>Browser starts drawing all layers in the screen here!</p></div>
        // </div>
        <div className="layout">
            .layout
            <div className="app-menu">.app-menu</div>
            <div className="header">
                .header
                <div className="menu-icon">
                    .menu-icon
                </div>
            </div>
        </div>
    );
}

export default (CSSTransitions);