import React from 'react'
import CardForCart from "../CardForCart/CardForCart";
import './Cart.css';
import {deleteItem} from "../../store/actions/cart.action";

const Cart = (props) => {
    let fullCoast = 0;
    props.state.state.cart.products.map((e) => {
        fullCoast += Number(e.coast) * e.quantity
        return null
    })
    return (
        <div>
            <div>
                {props.state.state.cart.products.map(e =>
                    <CardForCart
                        title={e.title}
                        coast={e.coast}
                        quantity={e.quantity}
                        delete={() => props.state.dispatch(deleteItem(e.id, e.quantity))}
                    />
                )}
            </div>
            <div className={'fullCoast'}>
                Всего: {fullCoast} руб.
            </div>
        </div>
    )
}

export default Cart;