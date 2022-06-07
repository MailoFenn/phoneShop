import {cartDec, pushAddButton} from "./general.action";

export const cartAction = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE: 'DELETE'
}

export const addToCart = (product) => {
    return dispatch => {
        dispatch({
            type: cartAction.ADD_TO_CART,
            product: product
        });
        dispatch(pushAddButton())
    }

}

export const deleteItem = (id, quantity) => {
    return dispatch => {
        dispatch({
            type: cartAction.DELETE,
            id: id
        })
        dispatch(cartDec(quantity))
    }

}
