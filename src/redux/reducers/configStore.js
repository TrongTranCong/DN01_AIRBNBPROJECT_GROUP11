import { applyMiddleware, combineReducers, createStore } from "redux";
import { QuanLyViTriReducer } from "./QuanLyViTriReducer";
import { DanhSachPhongReducer } from "./DanhSachPhongReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  //state ứng dụng
  QuanLyViTriReducer,
  DanhSachPhongReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
