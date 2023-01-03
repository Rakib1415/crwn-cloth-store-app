import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import CollectionsOverviewContainer from './Components/Collections-overview/Collections-overview-container';
import Header from './Components/Header/Header';
import PrivateOutlet from './Components/PrivateOutlet/Private-outlet';
import PublicOutlet from './Components/PublicOutlet/PublicOutlet';


import { connect } from 'react-redux';
import CategoryPageContainer from './Pages/Category/Category-page-container';
import Checkout from './Pages/Checkout/Checkout';
import HomePage from './Pages/HomePage/HomePage.component';
import ShopPage from './Pages/Shop/ShopPage';
import SignInandSignUP from './Pages/Sign-in and Sign-up/SignInandSignUP';
import ThankYou from './Pages/Thank-you/Thank-you';
import { checkUserSession } from './store/user/user-actions';




class App extends React.Component {

 componentDidMount(){
  const {checkUserSession} = this.props;
  checkUserSession();
  // const {setCurrentUser} = this.props;
  // const auth = getAuth();
  // this.unsubscribeFromAuth = onAuthStateChanged(auth, async(user) => {
  //   if(auth.currentUser){
  //     const userRef = await createUserProfileDocument(user);
  //   const userSnap = await getDoc(userRef);
  //   setCurrentUser({
  //       id : userSnap.id,
  //       ...userSnap.data()
  //     });
  //   }else{
  //     setCurrentUser(auth.currentUser)
  //   }
    
  // });

 };

 componentWillUnmount(){
  // this.unsubscribeFromAuth();
 }

 render(){

  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop/*" element={<ShopPage/>}>
        <Route path="" element={<CollectionsOverviewContainer/>}/>
        <Route path=":categoryId" element={<CategoryPageContainer/>}/>
      </Route>
      <Route path='/*' element={<PrivateOutlet/>}>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
      <Route path='/*' element={<PublicOutlet/>}>
        <Route path='signin' element={<SignInandSignUP/>}/>
      </Route>
      <Route path='/thankyou' element={<ThankYou/>}/>
    </Routes>
    </div>
  )
 }
}

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});



export default connect(null, mapDispatchToProps)(App);
