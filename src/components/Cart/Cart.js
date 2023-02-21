import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
const cartItems=(
    <ul  className={classes['cart-items']}>
        {cartCtx.map((item)=>(
            <li>{item.name}</li>
        ))}
        {/* {[{id:'c1',name:'Sneha',amount:2,price:500}].map((item)=>(<li>{item.name}</li>))} */}
    </ul>
);



return(
    <Modal onClose={props.onClose}>
    <div>
        {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>300</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </div>
    </Modal>
);
};
export default Cart;
