import React from 'react';
import { CustomButtonContainer } from './CustomButton-styles';
import './CustomButton.scss';
const CustomButton = ({children, ...otherProps}) => {
    return (
        <CustomButtonContainer {...otherProps} >
            {children}
        </CustomButtonContainer>
    );
};

export default CustomButton;