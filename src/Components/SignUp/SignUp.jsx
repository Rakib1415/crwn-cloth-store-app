import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../store/user/user-actions';
import CustomButton from '../Custom-button/CustomButton';
import FormInput from '../Form-input/FormInput';
import { SignUpContainer, SignUpTitle } from './Signup-styles';


const SignUp = ({signUpStart}) => {
    const [formState, setFormState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword : ''
    });
  
    const handleSubmit = event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = formState;
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        signUpStart({email, password, displayName});
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value });
    }
        const { displayName, email, password, confirmPassword } = formState;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                     <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                     <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                     <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
}

const mapDispatchToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);