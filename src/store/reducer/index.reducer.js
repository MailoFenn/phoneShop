import {combineReducers} from "redux";
import generalReducer from './general.reducer';
import headerReducer from './header.reducer';
import phoneReducer from "./phone.reducer";
import cartReducer from "./cart.reducer";
import casesReducer from "./cases.reducer";
import headphonesReducer from "./headphones.reducer";

const rootReducer = combineReducers({
    general: generalReducer,
    header: headerReducer,
    phone: phoneReducer,
    cases: casesReducer,
    cart: cartReducer,
    headphones: headphonesReducer
})

export default rootReducer;