
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase-util';
import shopActionTypes from "./shop-types";


export const fetchCollectionsStart = () => ({
    type : shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type : shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type : shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload : errorMessage
});

export const fetchCollectionsStartAsyn = () => {
    return async dispatch => {
       try{
        const collectionRef = collection(db, 'collections');
        dispatch(fetchCollectionsStart());
        const snapShot = await getDocs(collectionRef);
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap))

       }catch(err){
        dispatch(fetchCollectionsFailure(err.message))
       }
    }
};

