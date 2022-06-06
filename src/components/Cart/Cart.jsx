import React from 'react'

const Cart = (props) => {
    return (
        <React.Fragment>
            {props.state.state.cart.products.map(e =>
                <div key={e.id} className={'product'}>
                    {e.title} {e.coast} {e.quantity}
                </div>
            )}
        </React.Fragment>
    )
}

export default Cart;