import React from 'react';
import './index.scss';

// import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const CSSClipPath = () => {

    const [state, setState] = React.useState('cross');

    return (
        <div className="section">
            <svg height="0" width="0">
                <defs>
                    <clipPath id="cross">
                        <rect y="110" x="137" width="90" height="90" />
                        <rect x="0" y="110" width="90" height="90" />
                        <rect x="137" y="0" width="90" height="90" />
                        <rect x="0" y="0" width="90" height="90" />
                    </clipPath>
                </defs>
            </svg>
            <div>
                <img alt="clip" id="clipped" className={state} src="https://source.unsplash.com/500x500/?nature" />
            </div>
            <Select
                value={state}
                onChange={(e) => setState(e.target.value)}
                displayEmpty
            >
                <MenuItem value={'circle'}>circle</MenuItem>
                <MenuItem value={'cross'}>cross</MenuItem>
                <MenuItem value={'inset'}>inset</MenuItem>
            </Select>

        </div>
    );
}

export default (CSSClipPath);