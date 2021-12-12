import { GET_ROOMS_LIST } from "../actions/types/DanhSachPhongTypes";
import { CHI_TIET_PHONG } from "../actions/types/ChiTietPhongTypes";
const stateDefault = {
  arrDanhSachPhong: [],
  chiTietPhong: {},
};

export const DanhSachPhongReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ROOMS_LIST: {
      // state.arrDanhSachPhong = action.arrDanhSachPhong;

      return {
        ...state,
        arrDanhSachPhong: action.arrDanhSachPhong,
      };
    }
    case CHI_TIET_PHONG: {
      return {
        ...state,
        chiTietPhong: action.chiTietPhong,
      };
    }
    default:
      return { ...state };
  }
};
