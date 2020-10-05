import React from 'react';
// import './styles.css';
import Renderer from './Renderer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import CardConfig from './config';

export default function App() {
    return (
        <div className='App'>
            <div className='card-container'>
                {CardConfig.map(config => Renderer(config))}
            </div>
        </div>
    );
}