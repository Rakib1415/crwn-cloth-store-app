import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
import './SignInandSignUp.scss';

const SignInandSignUP = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default SignInandSignUP;