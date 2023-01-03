import { all, call, put, takeLatest } from 'redux-saga/effects';
import shopActionTypes from './shop-types';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase-util';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop-actions';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = collection(db, 'collections');
        const snapShot = yield getDocs(collectionRef);
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap))

       }catch(err){
        yield put(fetchCollectionsFailure(err.message))
       }
}

export function* fetchCollectionsStart(){
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync )
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}