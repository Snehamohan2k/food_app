import {  useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  };
  const hideCartHandler=()=>{
    setCartIsShown(false);
  };
  return (
<CartProvider>
    { cartIsShown&&<Cart onClose={hideCartHandler}/>} 
     {/* This will render if cartIsShown is true and not render when it is false */}
     <Header onShowCart={showCartHandler}/>
      <main>
        <Meals></Meals>
      </main>
      </CartProvider>
  );
}

export default App;
