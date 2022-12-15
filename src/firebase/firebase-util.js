import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export const signInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt : 'select_account'
    })
    try{
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        // console.log(user);
    }catch(err){
        console.log(err);
    }
}

export const handleSignOut = async() => {
    await signOut(auth);
}

export const createUserProfileDocument = async(userAuth, additionalData) => {
    
    if(!userAuth) return;
    const userRef = doc(db, "users", userAuth.uid);
    try{
        const userSnap = await getDoc(userRef);
        if(!userSnap.exists()){
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
    }catch(err){
        console.log('user created error', err.message);
    }

    return userRef;
}



