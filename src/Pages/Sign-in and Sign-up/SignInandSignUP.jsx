import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import { SigninAndSignupContainer } from './SignInAndSignUpPage-styles';

const SignInandSignUP = () => {
    return (
        <SigninAndSignupContainer>
            <SignIn/>
            <SignUp/>
        </SigninAndSignupContainer>
    );
};

export default SignInandSignUP;