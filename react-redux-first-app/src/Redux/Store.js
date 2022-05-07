import todoReducer from "./TodoReducer";
import {legacy_createStore as createStore} from 'redux';

const store = createStore(todoReducer);

export default store;