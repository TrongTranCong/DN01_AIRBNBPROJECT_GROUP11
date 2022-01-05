import { GET_LOCATIONS } from "../actions/types/QuanLyViTriTypes";
const stateDefault = {
  arrLocations: [],
  searchInfo: {},
};
// const stateSearch = [];

export const QuanLyViTriReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_LOCATIONS: {
      return { ...state, arrLocations: action.arrLocations };
    }
    case "GET_INFO_SEARCH": {
      return { ...state, searchInfo: action.searchInfo };
    }
    default:
      return { ...state };
  }
};

// export const LayThongTinSearchReducer = (state = stateDefault, action) => {
//   switch (action.type) {
//     case "GET_INFO_SEARCH": {
//       return {...state,getInfo:action.searchInfo};
//     }
//     default:
//       return state  ;
//   }
// };
