import React from 'react';

import './index.scss'
// import { Paper } from '@material-ui/core';

const PQNode = ({ val, priority, left, right }) => {
    // console.log('node', { val, prev, next });
    return (
        <div className="pq-node">
            {/* <Paper elevation={4}> */}
                <div className="pq-node__group">
                    <span className="pq-node__value">{val}</span>
                    <span className="pq-node__priority">{priority}</span>
                </div>
                {/* {left && <span className="pq-node__left">{left}</span>}
                {right && <span className="pq-node__right">{right}</span>} */}
            {/* </Paper> */}
        </div>
    )
}

export default (PQNode);