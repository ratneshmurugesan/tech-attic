import React from "react";
import { Title } from '../components/title';
import { TitleWrapperProps } from '../types';

const TitleWrapper = ({ onClick, ...rest }: TitleWrapperProps) => {
    return <div onClick={onClick} >
        <Title {...rest} />
    </div>
};

export default TitleWrapper;