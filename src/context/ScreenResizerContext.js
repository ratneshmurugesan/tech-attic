import React, { useState, useEffect, createContext } from "react";

const ScreenResizerContext = createContext({});

const Provider = ScreenResizerContext.Provider;

const ScreenResizerWrapper = ({ children }) => {
  const [width, setInnerWidth] = useState(window.innerWidth);
  const [height, setInnerHeight] = useState(window.innerHeight);
  //Alternate solution - window.matchMedia('(max-width: ???px)')

  useEffect(() => {
    const resizeWindow = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
      return;
    };
    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const contextStateObj = {
    contextName: "ScreenResizer-Context",
    width,
    height
  };

  return (
    <Provider value={{ ...contextStateObj }}>
      {children}
    </Provider>
  );
};

ScreenResizerContext.Wrapper = ScreenResizerWrapper;

export default ScreenResizerContext;