import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import RootReducer from './RootReducer';



const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(logger)));
// const store = createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;