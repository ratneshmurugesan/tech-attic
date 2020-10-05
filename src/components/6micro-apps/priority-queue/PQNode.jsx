import React from 'react';

import './styles.scss';

const PQNode = ({ val, priority }) => {
    return (
        <div className="pq-node">
                <div className="pq-node__group">
                    <span className="pq-node__value">{val}</span>
                    <span className="pq-node__priority">{priority}</span>
                </div>
        </div>
    )
}

export default (PQNode);