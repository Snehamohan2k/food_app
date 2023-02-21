import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
// import Meals from '../../assests/Meals_Image.jpg';
import classes from './Header.module.css'
const Header=(props)=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src="https://thumbs.dreamstime.com/z/food-table-top-view-two-roasted-chicken-bowl-lunch-high-angle-view-dining-salad-red-wine-69763660.jpg" alt="Meals Time"></img>
        </div>
    </Fragment>
};
export default Header;
