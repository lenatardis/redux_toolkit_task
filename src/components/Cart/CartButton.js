import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {uiActions} from "../../store/ui_slice";
import {totalQuantity} from "../../store/cart_slice";
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const total = useSelector(totalQuantity);
  return (
    <button className={classes.button} onClick={() => dispatch(uiActions.toggle())}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
