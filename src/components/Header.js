import React from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as Logo } from '../assets/logo.svg'
import {ReactComponent as CartIcon} from '../assets/cart-icon.svg';

function Header(props) {
  const isThankYouPathname = props.location.pathname === '/thank-you';
  const currentFillColor = isThankYouPathname ? 'fill-cherry' : 'fill-near-white';
  const currentColor = isThankYouPathname ? 'cherry' : 'white';
  const productPageClass = props.location.pathname === '/products' ? 'headerContainer--products-page' : '';

  return (
    <header className={`headerContainer absolute w-100 ph4 ph5-l pv5 pv5-l flex flex-row justify-between items-center z-1 ${productPageClass} ${props.rootClasses}`}>
      <Link to="/">
        <div className={`logoContainer dim pointer w-70 w-85-l ${currentFillColor}`}>
          <Logo />
        </div>
      </Link>
      <div className={`flex ${props.playCartAnimation && 'scale-animation'}`}>
        <Link to="cart-checkout" className="flex flex-row items-center no-underline dim">
          <div className={`cartIconContainer pointer ${currentFillColor}`}>
            <CartIcon />
          </div>
          <p className={`medium-text f7 ${currentColor}`}>
            {props.cart ? props.cart.total_items : '0'}
          </p>
        </Link>
      </div>
    </header>
  )
}

export default Header;
