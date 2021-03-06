import {phoneAction} from "../actions/phone.action";
import sendAPI from "../../api/api";

const initialState = {
    products: []
}

const phoneReducer = (state = initialState, action) => {
    sendAPI.getPhone().then((res) => {
        state.products = res.data.result
    })
    switch (action.type) {
        case phoneAction.GET_PHONE:
            state.products = action.result
            return state;
        default:
            return state;
    }
}

export default phoneReducer;