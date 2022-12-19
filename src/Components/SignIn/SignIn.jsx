import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase-util';
import CustomButton from '../Custom-button/CustomButton';
import FormInput from '../Form-input/FormInput';

import { ButtonsBarContainer, SignInContainer, SignInTitle } from './Signin-styles';

class SignIn extends React.Component {

        state = {
            email: '',
            password: ''
        }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
        
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value})
    }
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} type="email" name="email" value={this.state.email} required label="email" />
                    
                    <FormInput handleChange={this.handleChange} type="password" name="password" value={this.state.password} label="password" required />
                    
                    <ButtonsBarContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SignIn With Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;