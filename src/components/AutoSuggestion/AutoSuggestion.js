import React from "react";
import { AutoComplete } from "antd";
export default function AutoSuggestion() {
  const Complete = () => {
    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);

    const onSelect = (data) => {
      console.log("onSelect", data);
    };

    const onChange = (data) => {
      setValue(data);
    };
  };
  return <div></div>;
}
