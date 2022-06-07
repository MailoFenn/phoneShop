import {cartAction} from "../actions/cart.action";

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartAction.ADD_TO_CART:
            const isExist = state.products.filter(e => e.id === action.product.id)
            if (isExist.length) {
                state.products = state.products.map((e) => (
                    e.id === action.product.id
                        ? {...e, quantity: ++e.quantity}
                        : e
                ))
            } else {
                action.product.quantity = 1
                state.products.push(action.product)
            }
            return state;
        case cartAction.DELETE:
            state.products = state.products.filter((e) => {
                return e.id !== action.id
            })
            return state
        default:
            return state;
    }
}

export default cartReducer;