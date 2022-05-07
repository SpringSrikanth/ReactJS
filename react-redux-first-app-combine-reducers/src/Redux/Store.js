import {legacy_createStore as createStore} from 'redux';
import RootReducer from './RootReducer';

const store = createStore(RootReducer);

export default store;