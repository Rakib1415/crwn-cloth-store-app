import React, { useState } from 'react';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user-actions';
import CustomButton from '../Custom-button/CustomButton';
import FormInput from '../Form-input/FormInput';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './Signin-styles';

const SignIn = ({googleSignInStart, emailSignInStart }) => {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = event => {
        event.preventDefault();
        const { email, password } = formState;
        emailSignInStart(email, password);
               
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({...formState, [name] : value})
    }
    const {email, password} = formState;
        return (
            
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput handleChange={handleChange} type="email" name="email" value={email} required label="email" />
                    
                    <FormInput handleChange={handleChange} type="password" name="password" value={password} label="password" required />
                    
                    <ButtonsBarContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SignIn With Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);