import React from 'react';
import {useSelector} from 'react-redux';
import {cartIsVisible} from "../../store/ui_slice";
import {items} from "../../store/cart_slice";

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const visible = useSelector(cartIsVisible);
    const products = useSelector(items);
  return (
    visible && <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
        <ul>
            {
                products.map((item) => <CartItem key={item.id}
                                                 item={{
                                                     id: item.id,
                                                     title: item.title,
                                                     quantity: item.quantity,
                                                     totalPrice: item.totalPrice,
                                                     price: item.price
                                                 }}
                />)
            }
        </ul>
    </Card>
  );
};

export default Cart;
