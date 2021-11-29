import axios from "axios"
import { DOMAIN } from "../../util/setting";
import { GET_LOCATIONS } from "./types/QuanLyViTriTypes";
export const getLocationAction = async (dispatch) => {
    try {
        const result = await axios({
            url: `${DOMAIN}/api/locations`,
            method: 'GET',
            headers: {
                tokenByClass: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjEyLzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTcyMTYwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjQ5ODY5MjAwfQ.RkFKrifGWTY3MP0bQtIpvA5WpWWrcSkGjDSw01LwhuI',
            }
        });
        dispatch({
            type: GET_LOCATIONS,
            arrLocations: result.data
        });
    }
    catch (errors) {
        console.log(`errors`, errors)
    }
    return dispatch
}