import { useRef, useState} from 'react';
import classes from './Checkout.module.css';

//check if values are empty
const isEmpty=value=>value.trim()==='';
const isFivechars=value=>value.trim().length==='5'

const Checkout = (props) => {
  const [forminputsValidity,seforminputsValidity]=useState({
    name:true,
    street:true,
    city:true,
    postalCode: true
  });
  //read what users entered while form submitted
  const nameInputRef=useRef();
  const streetInputRef=useRef();
  const postalCodeInputRef=useRef();
  const CityInputRef=useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    //current will give us current entered value and value inbuilt object actual value
    const enteredName=nameInputRef.current.value;
    const enteredstreet=streetInputRef.current.value;
    const enteredPostalCode=postalCodeInputRef.current.value;
    const enteredCity=CityInputRef.current.value;


    const enternameisvalid=!isEmpty(enteredName);
    const enterStreetisvalid=!isEmpty(enteredstreet);
    const enterPostalisvalid=isFivechars(enteredPostalCode);
    const enterCityisvalid=!isEmpty(enteredCity);

    seforminputsValidity({
      name:enternameisvalid,
      street:enterStreetisvalid,
      postalCode: enterPostalisvalid,
      city: enterCityisvalid
    });
    const formIsvalid =
      enternameisvalid &&
      enterCityisvalid &&
      enterPostalisvalid &&
      enterStreetisvalid;


    if(!formIsvalid)
    {
      return;
    }
    //since we are accepting as a single value userdata
    //and not separate values pass it as a single object
    props.onConfirm({
      name:enteredName,
      street:enteredstreet,
      city: enteredCity,
      postalCode:enteredPostalCode
    });

  };

  const nameControlClasses = `${classes.control} ${
    forminputsValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    forminputsValidity.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    forminputsValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    forminputsValidity.city ? '' : classes.invalid
  }`;
  
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!forminputsValidity.name&&<p>Please enter a Valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!forminputsValidity.street&&<p>Please enter a Valid Street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
        {!forminputsValidity.postalCode&&<p>Please enter a Valid Postal Code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={CityInputRef}/>
        {!forminputsValidity.city&&<p>Please enter a Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;