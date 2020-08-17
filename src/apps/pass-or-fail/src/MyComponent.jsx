import React from 'react';

export const MyComponent = ({one = null, two = null}) => {
    return (
        <div>
            <h1>React+hooks+testing</h1>
            <p>{one}</p>
            <p>{two}</p>
            <button id="button-one" onClick={() => console.log('clicked')}></button>
        </div>
    )
}
