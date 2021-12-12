import "./App.css";
//cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DanhSachPhong from "./pages/DanhSachPhong/DanhSachPhong";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import ChiTietPhong from "./pages/ChiTietPhong/ChiTietPhong";
import Map from "./components/Map/Map";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import AdminPage from "./pages/_AdminPage/AdminPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" component={Home} />
        <HomeTemplate exact path="/danhsachphong" component={DanhSachPhong} />
        <HomeTemplate exact path="/chitietphong/:id" component={ChiTietPhong} />
        <AdminTemplate exact path='/admin/index' component={AdminPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
