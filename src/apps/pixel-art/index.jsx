import React, { useState } from 'react';

import Pixel from './Pixel';
import ColorPicker from './ColorPicker';
import connection from './Connection';

import { ApolloProvider, useSubscription } from '@apollo/react-hooks';
import { GET_PIXELS } from './gqlquery';

import "./index.scss";

// const pixels = new Array(400).fill("white");

const PixelArt = () => {
    const [color, changeColor] = useState("white");
    const { loading, error, data } = useSubscription(GET_PIXELS);

    if (loading) return <div>Loading.. Loading...</div>
    if (error) return <div>Error when loading this App!</div>
    return (
        <div className="content">
            <div className="logo" style={{ backgroundColor: color }}>Draw</div>
            <p>Pick a Color</p>
            <ColorPicker changeColor={changeColor} />
            <p>Click a Pixel</p>
            <div className="container">
                {data.pixels.map((pixel) => (
                    <Pixel {...pixel} key={pixel.id} newColor={color} />
                ))}
            </div>
        </div>
    );
}

const App = () => {
    return (
        <ApolloProvider client={connection}>
            <PixelArt />
        </ApolloProvider>
    )
}

export default App;
