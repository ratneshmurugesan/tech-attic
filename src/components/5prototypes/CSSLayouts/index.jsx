import React from 'react';

// import Button from '@material-ui/core/Button';

import './index.scss';

const CSSLayouts = () => {
    return (
        // <React.Fragment>
        //     <div>UserJourney</div>
        //     <div>UserJourney1<Button>click</Button></div>
        //     <div>UserJourney2</div>
        // {/* </React.Fragment> */}
        <React.Fragment>
            <div className="parent1">
                <div className="input_text" contentEditable>Centering a DIV..Type somthing here</div>
            </div>
            <div className="pancakes">
                <p>Flexbox pancakes</p>
                <div className="parent2">
                    <div className="box--stretch">1</div>
                    <div className="box--stretch">2</div>
                    <div className="box--stretch">3</div>
                </div>
                <div className="parent2">
                    <div className="box">1</div>
                    <div className="box">2</div>
                    <div className="box">3</div>
                </div>
            </div>
            <div className="parent3">
                <div className="card">
                    <div className="title"><p>Clamped Card</p></div>
                    <div className="image"><img alt="sample" width="100" height="100" /></div>
                    <div className="desc">
                        Description Description Description Description Description Description Description Description
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CSSLayouts;