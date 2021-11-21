import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveCharts = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid =
      !isNotFiveCharts(enteredPostal) && !isNotFiveCharts(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  const nameIsInValid = !formInputsValidity.name && classes.errLabel;
  const streetIsInValid = !formInputsValidity.street && classes.errLabel;
  const postalCodeIsInValid =
    !formInputsValidity.postalCode && classes.errLabel;
  const cityIsInValid = !formInputsValidity.city && classes.errLabel;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          className={nameIsInValid}
          type="text"
          id="name"
          ref={nameInputRef}
        />
        {!formInputsValidity.name && (
          <p className={classes.error}>Please input a valid name!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          className={streetIsInValid}
          type="text"
          id="street"
          ref={streetInputRef}
        />
        {!formInputsValidity.street && (
          <p className={classes.error}>Please input a valid street!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          className={postalCodeIsInValid}
          type="text"
          id="postal"
          ref={postalInputRef}
        />
        {!formInputsValidity.postalCode && (
          <p className={classes.error}>Please input a valid postal Code!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          className={cityIsInValid}
          type="text"
          id="city"
          ref={cityInputRef}
        />
        {!formInputsValidity.city && (
          <p className={classes.error}>Please input a valid city!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={props.onCancel}
          className={classes.cancel}
        >
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
