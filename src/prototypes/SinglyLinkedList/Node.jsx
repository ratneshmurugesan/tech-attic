import React from 'react';

import './index.scss'

const Node = ({ value, prev, next }) => {
    // console.log('node', { value, prev, next });
    return (
        <div className="node">
            {prev && <span className="node__prev">{prev}</span>}
            <span className="node__value">{value}</span>
            <span className="node__next">{next || 'x'}</span>
        </div>
    )
}

export default (Node);