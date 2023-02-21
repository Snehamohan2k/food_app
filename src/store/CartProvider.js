import { useReducer } from "react";
import CartContext  from "./cart-context";
const defaultcartState={
    items:[],
    totalAmount:0
};
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedItems=state.item.item.concat(action.item);
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    return defaultcartState;
}; 
const CartProvider=(props)=>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultcartState);
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item});
    };
    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:'REMOVE',id:id});
    };
    const cartContext={
        items:[cartState.items],
        totalAmount:cartState.totalAmount,
        additem: addItemToCartHandler,
        removeitem: removeItemFromCartHandler,
    };
    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};
export default CartProvider;