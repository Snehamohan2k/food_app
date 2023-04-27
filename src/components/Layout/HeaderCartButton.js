import { useContext, useEffect, useState } from 'react';
import { Component } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
//Working

// class HeaderCartButton extends Component {
//   static contextType = CartContext;

//   state = {
//     btnIsHighlighted: false,
//     numberOfCartItems: 0,
//   };

 

//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.numberOfCartItems !== this.state.numberOfCartItems;
//   }
  

//   componentDidUpdate(prevProps, prevState) {
//     const { items } = this.context;
//     console.log("Cart items:", items);
//     this.updateCartButton();
//   }

//   updateCartButton() {
//     const { items } = this.context;
//     const numberOfCartItems = items.reduce((curNumber, item) => {
//       return curNumber + item.amount;
//     }, 0);

//     //console.log(numberOfCartItems)
 
//     if (numberOfCartItems === 0) {
//       this.setState({ btnIsHighlighted: false, numberOfCartItems });
//     } else {

//       this.setState({ btnIsHighlighted: true, numberOfCartItems }, () => {
//         console.log("Updated: ", items);
//        setTimeout(() => {
//           this.setState({ btnIsHighlighted: false });
//         }, 300);
//       });
//     }
//   }

  
//   render() {
//     const { btnIsHighlighted, numberOfCartItems } = this.state;
//     const { onClick } = this.props;

//     const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

//     return (
//       <button className={btnClasses} onClick={onClick}>
//         <span className={classes.icon}>
//           <CartIcon />
//         </span>
//         <span>Your Cart</span>
//         <span className={classes.badge}>{numberOfCartItems}</span>
//       </button>
//     );
//   }
// }

// export default HeaderCartButton;


//FUNTIONAL COMPONENT
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    console.log(items)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;




// class HeaderCartButton extends Component {
//   static contextType = CartContext;

//   constructor() {
//     super();
//     this.state = {
//       btnIsHighlighted: false,
//       numberOfCartItems: 0,
//     };
//   }

//   componentDidMount() {
//     this.updateCartButton();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { items } = this.context;

//     if (prevState.numberOfCartItems !== items.length) {
//       this.updateCartButton();
     
//     }
//   }

//   updateCartButton() {
//     const { items } = this.context;
//     const numberOfCartItems = items.reduce((curNumber, item) => {
//       return curNumber + item.amount;
//     }, 0);
    
//     if (numberOfCartItems === 0) {
//       this.setState({ btnIsHighlighted: false });
//       return;
//     }

//     // Add a condition to check if state has already been updated
//     if (!this.state.btnIsHighlighted || this.state.numberOfCartItems !== numberOfCartItems) {
//       this.setState({ btnIsHighlighted: true, numberOfCartItems });

//       setTimeout(() => {
//         this.setState({ btnIsHighlighted: false });
//       }, 300);
//     }
//   }

//   render() {
//     const { btnIsHighlighted, numberOfCartItems } = this.state;
//     const { onClick } = this.props;

//     const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

//     return (
//       <button className={btnClasses} onClick={onClick}>
//         <span className={classes.icon}>
//           <CartIcon />
//         </span>
//         <span>Your Cart</span>
//         <span className={classes.badge}>{numberOfCartItems}</span>
//       </button>
//     );
//   }
// }

// export default HeaderCartButton;








//LAST

// class HeaderCartButton extends Component {
//   static contextType = CartContext;

// state = {
//   btnIsHighlighted: false,
//   numberOfCartItems: 0
// };

// shouldComponentUpdate(nextProps, nextState) {
//   return nextState.numberOfCartItems !== this.state.numberOfCartItems 
//         //  nextState.prevCartItems !== this.state.prevCartItems;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { items } = this.context;
//   console.log("Cart items:", items);
//   if (prevState.items !== items) {
//     this.updateCartButton();
//   }
// }

// updateCartButton() {
//   const { items } = this.context;
//   const numberOfCartItems = items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

//   if (numberOfCartItems === 0) {
//     this.setState({ btnIsHighlighted: false, numberOfCartItems });
//   } else {
//     this.setState({ btnIsHighlighted: true, numberOfCartItems }, () => {
//       console.log("Updated: ", items);
//       setTimeout(() => {
//         this.setState({ btnIsHighlighted: false });
//       }, 300);
//     });
//   }
// }

// render() {
//   const { btnIsHighlighted, numberOfCartItems } = this.state;
//   const { onClick } = this.props;

//   const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

//   return (
//     <button className={btnClasses} onClick={onClick}>
//       <span className={classes.icon}>
//         <CartIcon />
//       </span>
//       <span>Your Cart</span>
//       <span className={classes.badge}>{numberOfCartItems}</span>
//     </button>
//   );
// }
// }

// export default HeaderCartButton;


//PreV

// class HeaderCartButton extends Component {
//   static contextType = CartContext;

//   state = {
//     btnIsHighlighted: false,
//     numberOfCartItems: 0,
//     prevCartItems: []
//   };

//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.numberOfCartItems !== this.state.numberOfCartItems ||
//            nextState.prevCartItems !== this.state.prevCartItems;
//   }
  
//   componentDidUpdate(prevProps, prevState) {
//     const { items } = this.context;
//     console.log("Cart items:", items);
//     if (prevState.prevCartItems !== items) {
//       this.updateCartButton();
//       // this.setState(
//       //   {btnIsHighlighted:true});
//     }
//   }

//   updateCartButton() {
//     const { items } = this.context;
//     const numberOfCartItems = items.reduce((curNumber, item) => {
//       return curNumber + item.amount;
//     }, 0);
 
//     if (numberOfCartItems === 0) {
//       this.setState({ btnIsHighlighted: false, numberOfCartItems, prevCartItems: items });
//     } else {
//       this.setState({ btnIsHighlighted: true, numberOfCartItems, prevCartItems: items }, () => {
//         console.log("Updated cart items:", items);
        
//         setTimeout(() => {
//           this.setState({ btnIsHighlighted: false });
       
//         }, 300);
//       });
//     }
//   }

//   render() {
//     const { btnIsHighlighted, numberOfCartItems} = this.state;
//     const { onClick } = this.props;

//     const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
//    // console.log(btnIsHighlighted);
//     return (
      
//       <button className={btnClasses} onClick={onClick}>
//         <span className={classes.icon}>
//           <CartIcon />
//         </span>
//         <span>Your Cart</span>
//         <span className={classes.badge}>{numberOfCartItems}</span>
//       </button>
//     );
//   }
// }

// export default HeaderCartButton;


