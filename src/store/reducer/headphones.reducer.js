import {headphonesAction} from "../actions/headphones.action";
import sendAPI from "../../api/api";

const initialState = {
    products: []
}

const headphonesReducer = (state = initialState, action) => {
    sendAPI.getHeadphones().then((res) => {
        state.products = res.data.result
    })
    switch (action.type) {
        case headphonesAction.GET_HEADPHONES:
            state.products = action.result
            return state;
        default:
            return state;
    }
}

export default headphonesReducer;