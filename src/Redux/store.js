import {combineReducers, createStore} from 'redux';
import catalogReducer from './catalogReducer';
import cartReducer from "./cartReducer";

let rootReducer = combineReducers ( {
    catalog: catalogReducer,
    cart: cartReducer,
});
let store = createStore (rootReducer);
window.store = store;
export default store;
