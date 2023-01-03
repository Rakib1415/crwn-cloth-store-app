import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Logo from '../../assets/crown.svg';
import { selectCartHidden } from '../../store/cart/cart-selectors';
import { signOutStart } from '../../store/user/user-actions';
import { selectCurrentUser } from '../../store/user/user-selectors';
import CartDropdown from '../CartDropdown/CartDropdown';
import CartIcon from '../CartIcon/CartIcon';
import './Header.scss';

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './Header.styles';

const Header = ({currentUser, hidden, signOutStart}) => {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <img src={Logo} className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTRACT
                </OptionLink>
                {
                    currentUser ?
                        (<OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>)
                        :
                        (<OptionLink to="/signin">SIGN IN</OptionLink>)
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null : (<CartDropdown/>)
            }
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);