import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { auth } from "../../firebase/firebase";
import { createUserProfileDocument, getCurrentUser, googleProvider } from "../../firebase/firebase-util";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from "./user-actions";
import userActionTypes from "./user-types";


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
      const userRef = yield call(
        createUserProfileDocument,
        userAuth,
        additionalData
      );
        const userSnapshot = yield getDoc(userRef);
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      yield put(signInFailure(error));
    }
  }


export function* signInWithGoogle(){
    try{
        const {user} = yield signInWithPopup(auth, googleProvider);
       yield getSnapshotFromUserAuth(user);

    }catch(err){
        yield put(signInFailure(err))
    }

}
export function* signInWithEmail({payload : {email, password}}){
    console.log(email, password);
    try{
        const {user} = yield signInWithEmailAndPassword(auth, email, password);
        yield getSnapshotFromUserAuth(user);

    }catch(err){
        console.log(err);
        yield put(signInFailure(err))
    }
}

export function* isAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);

    }catch(err){
        yield put(signInFailure(err))
    }
}

export function* logOut(){
    try{
        yield signOut(auth);
        yield put(signOutSuccess());


    }catch(err){
        yield put(signOutFailure(err))
    }
}

export function* signUp({payload : {email, password, displayName}}){
    try{
        const { user } = yield createUserWithEmailAndPassword(auth, email, password);
        yield put(signUpSuccess({user, additionalData: {displayName}}))

    }catch(err){
        yield put(signUpFailure(err));
    }
}

export function* signInAfterSignUp({payload : {user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData);

}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, logOut)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess)])
}