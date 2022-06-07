import {casesAction} from "../actions/cases.action";
import sendAPI from "../../api/api";

const initialState = {
    products: []
}

const casesReducer = (state = initialState, action) => {
    sendAPI.getCases().then((res) => {
        state.products = res.data.result
    })
    switch (action.type) {
        case casesAction.GET_CASES:
            state.products = action.result
            return state;
        default:
            return state;
    }
}

export default casesReducer;