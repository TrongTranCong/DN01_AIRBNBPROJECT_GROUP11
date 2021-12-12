import axios from "axios";
import { quanLyPhongChoThueService } from "../../services/QuanLyPhongChoThueService";
import { quanLyChiTietPhongService } from "../../services/QuanLyChiTietPhongService";
import { DOMAIN } from "../../util/setting";
import { GET_ROOMS_LIST } from "./types/DanhSachPhongTypes";
import { CHI_TIET_PHONG } from "./types/ChiTietPhongTypes";
import { http } from "../../util/setting";
export const getRoomsAction = async (dispatch) => {
  try {
    const result =
      await quanLyPhongChoThueService.layDanhSachPhongChoThueTheoViTri();
    console.log("result", result);
    dispatch({
      type: GET_ROOMS_LIST,
      arrDanhSachPhong: result.data,
    });
  } catch (errors) {
    console.log(`error`, errors);
  }
  return dispatch;
};
export const getDetailRoomsAction = (maPhong) => {
  return (dispatch) => {
    let promise = http.get(`/api/rooms/${maPhong}`);
    promise.then((result) => {
      dispatch({
        type: CHI_TIET_PHONG,
        chiTietPhong: result.data,
      });
      console.log(`chiTietPhong`, result.data)
    });
    promise.catch((errors) => {
      console.log(errors.res.data);
    });
  };
};
