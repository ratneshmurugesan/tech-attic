import React, { useState } from "react";

import { UPDATE_COLOR } from './gqlquery';
import { useMutation } from "@apollo/react-hooks";
import { useEffect } from "react";

const Pixel = ({ id, oldColor, newColor }) => {
    const [stateOldColor, changeOldColor] = useState(oldColor);
    const [updatePixelColor] = useMutation(UPDATE_COLOR);

    useEffect(() => {
        changeOldColor(stateOldColor);
    }, [stateOldColor]);

    return (
        <span
            className="pixel"
            onClick={() => {
                changeOldColor(newColor); // Setting LOCAL STATE with new color. 
                updatePixelColor({ variables: { id: id, color: newColor } });  // Setting DB STATE with new color via GQL.
            }}
            style={{ backgroundColor: stateOldColor }}
        ></span>
    );
};

export default Pixel;