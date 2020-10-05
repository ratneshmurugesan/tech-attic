import React, { useState, useEffect, createContext, useContext } from 'react';

const screenSizeContext = createContext({});

export const ScreenSizeProvider = ({ children }) => {

    const [width, setInnerWidth] = useState(window.innerWidth);
    const [height, setInnerHeight] = useState(window.innerHeight);
    //Alternate solution - window.matchMedia('(max-width: ???px)')

    useEffect(() => {
        const resizeWindow = () => {
            setInnerWidth(window.innerWidth);
            setInnerHeight(window.innerHeight);
            return;
        };
        window.addEventListener('resize', resizeWindow);

        return () => window.removeEventListener('resize', resizeWindow);
    }, []);

    // console.log('ScreenResizer', { width, height });

    return (
        <screenSizeContext.Provider value={{ width, height }}>
            {children}
        </screenSizeContext.Provider>
    )
}

export const ScreenResizer = () => {
    //As hooks are composable... i am composing things here!
    const { width, height } = useContext(screenSizeContext);
    return { width, height };
}