import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon-component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo} from '../../assets/crown.svg';

import { 
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink 
} from './header.styles.jsx';
 
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer className='header'>
    <LogoContainer className='logo-container' to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer className='options'>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {
        currentUser ? 
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
        :
        <OptionLink to = '/signIn'>
          SIGN IN
        </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

// Advanced destructuring
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);