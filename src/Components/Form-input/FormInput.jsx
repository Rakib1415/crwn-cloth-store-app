import React from 'react';
import { FormInputContainer, FormInputLabel, GroupContainer } from './FormInput-styles';


const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...otherProps}/>
            {
                label ?
                    (<FormInputLabel className={`${otherProps.value.length ? 'shrink': ''} `}>
                        {label}
                    </FormInputLabel>)
                    :null
            }
        </GroupContainer>
    );
};

export default FormInput;