import {combineReducers} from "redux";
import generalReducer from './general.reducer';
import headerReducer from './header.reducer';
import phoneReducer from "./phone.reducer";
import cartReducer from "./cart.reducer";

const rootReducer = combineReducers({
    general: generalReducer,
    header: headerReducer,
    phone: phoneReducer,
    cart: cartReducer
})

export default rootReducer;