import { combineReducers } from "redux";
import UserReducer from "./Users/UserReducer";

const RootReducer = combineReducers({
    users:UserReducer
});
export default RootReducer;