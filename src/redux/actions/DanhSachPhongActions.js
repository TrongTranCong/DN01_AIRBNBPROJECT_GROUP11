import axios from "axios";
import { quanLyPhongChoThueService } from "../../services/QuanLyPhongChoThueService";
import { DOMAIN } from "../../util/setting";
import { GET_ROOMS_LIST } from "./types/DanhSachPhongTypes";

export const getRoomsAction = async(dispatch)=>{
    try {
        const result = await quanLyPhongChoThueService.layDanhSachPhongChoThueTheoViTri();
        dispatch({
            type:GET_ROOMS_LIST,
            arrDanhSachPhong:result.data
        })
    }
    catch(errors){
        console.log(`error`, errors)
    }
    return dispatch
}