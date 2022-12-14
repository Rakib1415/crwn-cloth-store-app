import React, { useEffect } from 'react';
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

const App = ({checkUserSession}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

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


const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});



export default connect(null, mapDispatchToProps)(App);
