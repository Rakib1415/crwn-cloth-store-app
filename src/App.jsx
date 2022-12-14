import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage.component';
import ShopPage from './Pages/Shop/ShopPage';
import SignInandSignUP from './Pages/Sign-in and Sign-up/SignInandSignUP';

class App extends React.Component {
  state = {
    currentUser : null
  };

  unsubscribeFromAuth = null;

 componentDidMount(){
  const auth = getAuth();
  this.unsubscribeFromAuth = onAuthStateChanged(auth, user => {
    this.setState({currentUser : user});
    console.log(user);
  })
 };

 componentWillUnmount(){
  this.unsubscribeFromAuth();
 }





 render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>
      <Route path='/signin' element={<SignInandSignUP/>}/>
    </Routes>
    </div>
  )
 }
}

export default App
