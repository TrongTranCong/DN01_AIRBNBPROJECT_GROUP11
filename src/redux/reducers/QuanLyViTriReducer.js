import { GET_LOCATIONS } from "../actions/types/QuanLyViTriTypes";
const stateDefault = {
  arrLocations: [],
};

export const QuanLyViTriReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_LOCATIONS: {
      state.arrLocations = action.arrLocations;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
