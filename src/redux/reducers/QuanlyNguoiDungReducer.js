import { TOKEN } from "../../util/setting";

const stateDefault = {
  userLogin: JSON.parse(localStorage.getItem("LOGIN_USER")) || {},
  // errors: "",
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "POST_LOGIN": {
      const { infoLogin } = action;
      // console.log(action);
      localStorage.setItem("LOGIN_USER", JSON.stringify(infoLogin.user));
      localStorage.setItem(TOKEN, JSON.stringify(infoLogin.token));
      return { ...state, userLogin: infoLogin };
    }
    // case "ERRORS": {
    //   return { ...state, errors: action.payload };
    // }
    default:
      return { ...state };
  }
};
