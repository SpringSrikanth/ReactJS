import { applyMiddleware, legacy_createStore as createStore } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;