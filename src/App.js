import "./App.css";
//cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DanhSachPhong from "./pages/DanhSachPhong/DanhSachPhong";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import ChiTietPhong from "./pages/ChiTietPhong/ChiTietPhong";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" component={Home} />
        <HomeTemplate exact path="/danhsachphong" component={DanhSachPhong} />
        <HomeTemplate exact path="/chitietphong/:id" component={ChiTietPhong} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
