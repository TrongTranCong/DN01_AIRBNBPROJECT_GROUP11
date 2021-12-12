import "./App.css";
//cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DanhSachPhong from "./pages/DanhSachPhong/DanhSachPhong";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

import Register from "./pages/Register/Register";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" component={Home} />
        <HomeTemplate exact path="/danhsachphong" component={DanhSachPhong} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/loginpage" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
