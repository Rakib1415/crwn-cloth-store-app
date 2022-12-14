import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage.component';
import ShopPage from './Pages/Shop/ShopPage';
import SignInandSignUP from './Pages/Sign-in and Sign-up/SignInandSignUP';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>
      <Route path='/signIn' element={<SignInandSignUP/>}/>
    </Routes>
    </div>
  )
}

export default App
