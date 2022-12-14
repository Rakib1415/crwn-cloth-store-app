import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase';

export const signInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt : 'select_account'
    })
    try{
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
    }catch(err){
        console.log(err);
    }
}

export const handleSignOut = async() => {
    await signOut(auth);
}



