import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRoomsAction } from "../../redux/actions/DanhSachPhongActions";

export default function ChiTietPhong(props) {
  const { arrDanhSachPhong } = useSelector(
    (state) => state.DanhSachPhongReducer
  );
  const dispatch = useDispatch();

  useEffect(async () => {
    const action = getRoomsAction;
    dispatch(action);
  }, []);
  const renderChiTietPhong = () => {
    return arrDanhSachPhong.map((item, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-6">
            <img className="img-fluid" src={item.image} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <img className="w-100" src={item.image} />
              </div>
              <div className="col-6">
                <img className="img-fluid" src={item.image} />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
       pu         <img className="img-fluid" src={item.image} />
              </div>
              <div className="col-6">
                <img className="img-fluid" src={item.image} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="mt-5 border-top">
      <h3>Chỗ khu vực bạn chọn</h3>
      <StarOutlined style={{ color: "hotpink" }} />
      <p style={{ display: "inline-block" }}> 4,83 (18 đánh giá)</p>
      <div className="row">{renderChiTietPhong()}</div>
    </div>
  );
}
