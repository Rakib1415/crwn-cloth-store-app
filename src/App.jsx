import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import { createUserProfileDocument } from './firebase/firebase-util';
import HomePage from './Pages/HomePage/HomePage.component';
import ShopPage from './Pages/Shop/ShopPage';
import SignInandSignUP from './Pages/Sign-in and Sign-up/SignInandSignUP';
import { setCurrentUser } from './store/user/user-actions';

class App extends React.Component {

 unsubscribeFromAuth = null;
 componentDidMount(){
  const {setCurrentUser} = this.props;
  const auth = getAuth();
  this.unsubscribeFromAuth = onAuthStateChanged(auth, async(user) => {
    if(auth.currentUser){
      const userRef = await createUserProfileDocument(user);
    const userSnap = await getDoc(userRef);
    setCurrentUser({
        id : userSnap.id,
        ...userSnap.data()
      });
    }else{
      setCurrentUser(auth.currentUser)
    }
    
  });
 };

 componentWillUnmount(){
  this.unsubscribeFromAuth();
 }

 render(){
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>
      <Route path='/signin' element={<SignInandSignUP/>}/>
    </Routes>
    </div>
  )
 }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
