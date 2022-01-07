import { applyMiddleware, combineReducers, createStore } from "redux";
import { QuanLyViTriReducer } from "./QuanLyViTriReducer";
import { DanhSachPhongReducer } from "./DanhSachPhongReducer";
import thunk from "redux-thunk";
import { QuanLyNguoiDungReducer } from "./QuanlyNguoiDungReducer";
import { DanhSachNguoiDungReducer } from "./DanhSachNguoiDungReducer";
import { ChiTietThongTinNguoiDungReducer } from "./ChiTietThongTinNguoiDungReducer";
const rootReducer = combineReducers({
  //state ứng dụng
  QuanLyViTriReducer,
  DanhSachPhongReducer,
  QuanLyNguoiDungReducer,
  DanhSachNguoiDungReducer,
  ChiTietThongTinNguoiDungReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
