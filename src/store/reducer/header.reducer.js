import {generalAction} from "../actions/general.action";

const initialState = {
    cartCount: 0
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalAction.CART_INC:
            state.cartCount++;
            return state;
        case generalAction.CART_DEC:
            state.cartCount -= action.quantity;
            return state;
        default:
            return state;
    }
}

export default headerReducer;