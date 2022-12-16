import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Logo from '../../assets/crown.svg';
import { handleSignOut } from '../../firebase/firebase-util';
import { selectCartHidden } from '../../store/cart/cart-selectors';
import { selectCurrentUser } from '../../store/user/user-selectors';
import CartDropdown from '../CartDropdown/CartDropdown';
import CartIcon from '../CartIcon/CartIcon';
import './Header.scss';

const Header = ({currentUser, hidden}) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src={Logo} className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTRACT
                </Link>
                {
                    currentUser ?
                        (<div className="option" onClick={handleSignOut}>SIGN OUT</div>)
                        :
                        (<Link className="option" to="/signin">SIGN IN</Link>)
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : (<CartDropdown/>)
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);