import React from 'react';
import { Outlet } from 'react-router-dom';

import './ShopPage.scss';


const ShopPage = () => {
    return (
        <div className="shop-page">
          <Outlet/>
         </div>
        )
    }


export default ShopPage;