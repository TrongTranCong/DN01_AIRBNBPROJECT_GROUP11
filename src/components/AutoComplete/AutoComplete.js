import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getLocationAction } from "../../redux/actions/QuanLyViTriActions";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const Complete = () => {
  const { arrLocations } = useSelector((state) => state.QuanLyViTriReducer);
  console.log(`arrLocations`, arrLocations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationAction());
  }, [dispatch]);

//   const [value, setValue] = useState(arrLocations);
  const [options, setOptions] = useState([arrLocations]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
    </>
  );
};
export default Complete;
