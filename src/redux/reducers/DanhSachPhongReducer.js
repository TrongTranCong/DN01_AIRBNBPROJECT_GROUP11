import { GET_ROOMS_LIST } from "../actions/types/DanhSachPhongTypes";
const stateDefault = {
  arrDanhSachPhong: [],
};

export const DanhSachPhongReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ROOMS_LIST: {
      state.arrDanhSachPhong = action.arrDanhSachPhong;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
