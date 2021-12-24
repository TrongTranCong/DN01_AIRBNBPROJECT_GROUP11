import { applyMiddleware, combineReducers, createStore } from "redux";
import { QuanLyViTriReducer } from "./QuanLyViTriReducer";
import { DanhSachPhongReducer } from "./DanhSachPhongReducer";
import thunk from "redux-thunk";
import { QuanLyNguoiDungReducer } from "./QuanlyNguoiDungReducer";
import { DanhSachNguoiDungReducer } from "./DanhSachNguoiDungReducer";
const rootReducer = combineReducers({
  //state ứng dụng
  QuanLyViTriReducer,
  DanhSachPhongReducer,
  QuanLyNguoiDungReducer,
  DanhSachNguoiDungReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
