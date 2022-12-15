import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleSignOut } from '../../firebase/firebase-util';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({currentUser}) => {
console.log(currentUser)
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                {/* <Logo className="logo"></Logo> */}
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


            </div>

        </div>
    )
};

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);