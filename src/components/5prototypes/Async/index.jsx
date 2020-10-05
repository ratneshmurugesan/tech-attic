import React from 'react';

// import StarsIcon from '@material-ui/icons/Stars';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import './index.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const Spinner = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        // const loadData = () => {
        const spinnerCircle = document.getElementById('spinner__circle');
        spinnerCircle.removeAttribute('hidden');
        fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms')
            .then(response => response.json())
            .then(data => {
                spinnerCircle.setAttribute('hidden', '');
                // spinnerCircle.setAttribute('class', 'hidden');
                setData(data);
                console.log(data)
            });
        // }
    }, []);

    console.log('state', data);

    return (
        <>
            <div className='spinner'>
                <div
                    hidden
                    id='spinner__circle'
                    className='spinner__circle'>
                    {/* <div className='first-icon'>
                <StarsIcon />
                </div> */}
                    <div>
                        <SettingsOutlinedIcon />
                    </div>
                </div>
                <div>{data.hello}</div>
            </div>
            {/* <button onClick={loadData}>Load</button> */}
        </>
    )
}

export default Spinner;