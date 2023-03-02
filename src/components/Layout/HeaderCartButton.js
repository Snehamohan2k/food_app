import { useContext, useEffect, useState } from 'react';
import { Component } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
//Working

class HeaderCartButton extends Component {
  static contextType = CartContext;

  state = {
    btnIsHighlighted: false,
    numberOfCartItems: 0,
  };

 

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.numberOfCartItems !== this.state.numberOfCartItems;
  }
  

  componentDidUpdate(prevProps, prevState) {
    const { items } = this.context;
    console.log("Cart items:", items);
    if (prevState.items !== items) {
      this.updateCartButton();
    }
  }

  updateCartButton() {
    const { items } = this.context;
    const numberOfCartItems = items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

    //console.log(numberOfCartItems)
 
    if (numberOfCartItems === 0) {
      this.setState({ btnIsHighlighted: false, numberOfCartItems });
    } else {

      this.setState({ btnIsHighlighted: true, numberOfCartItems }, () => {
        console.log("Updated: ", items);
       setTimeout(() => {
          this.setState({ btnIsHighlighted: false });
        }, 300);
      });
    }
  }

  
  render() {
    const { btnIsHighlighted, numberOfCartItems } = this.state;
    const { onClick } = this.props;

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    return (
      <button className={btnClasses} onClick={onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
  }
}

export default HeaderCartButton;


