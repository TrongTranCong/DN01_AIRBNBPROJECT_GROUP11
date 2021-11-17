import {applyMiddleware, combineReducers, createStore} from 'redux';
import { QuanLyViTriReducer } from './QuanLyViTriReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    //state ứng dụng
    // QuanLyViTriReducer:QuanLyViTriReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));