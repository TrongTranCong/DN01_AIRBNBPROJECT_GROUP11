import { applyMiddleware, combineReducers, createStore } from "redux";
import { QuanLyViTriReducer } from "./QuanLyViTriReducer";
import { DanhSachPhongReducer } from "./DanhSachPhongReducer";
import thunk from "redux-thunk";
import { QuanLyNguoiDungReducer } from "./QuanlyNguoiDungReducer";
const rootReducer = combineReducers({
  //state ứng dụng
  QuanLyViTriReducer,
  DanhSachPhongReducer,
  QuanLyNguoiDungReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
