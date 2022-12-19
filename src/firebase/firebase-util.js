import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { collection, doc, getDoc, setDoc, writeBatch } from 'firebase/firestore';
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

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    
    const batch = writeBatch(db);
    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef);
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transFormCollections = collections.docs.map( doc => {
        const {title, items} = doc.data();

        return {
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id,
            title,
            items
        };
    });
    
    return transFormCollections.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
}



