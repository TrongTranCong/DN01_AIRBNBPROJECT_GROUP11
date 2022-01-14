import React, { Fragment, useState } from "react";
import Dashboard from "../../pages/ThongTinPhong/ThongTinPhong";
// import { Route } from "react-router-dom";
// //thư viện ant design
// import { Layout, Menu, Dropdown, Input, Space } from "antd";
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   AimOutlined,
//   BankOutlined,
//   CaretDownOutlined,
//   AudioOutlined,
// } from "@ant-design/icons";

// const { Header, Sider, Content } = Layout;
// const menu = (
//   <Menu>
//     <Menu.Item key="0">
//       <a href="https://www.antgroup.com">Cập nhật thông tin</a>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <a href="https://www.aliyun.com">Đăng xuất</a>
//     </Menu.Item>
//   </Menu>
// );
// const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: "#1890ff",
//     }}
//   />
// );

// const onSearch = (value) => console.log(value);
// export default function AdminTemplate(props) {
//   return( 
//     <><Dashboard/>
//     <props.component {...propsRoute} />
//     </>
//     )
//   }

  // state = {
  //     collapsed: false,
  //   };
  // const [state, setState] = useState({
  //   collapsed: false,
  // });

  // const toggle = () => {
  //   setState({
  //     collapsed: !state.collapsed,
  //   });
  // };

  // return (
  //   <>
  //     <Route
  //       path={props.path}
  //       render={(propsRoute) => {
  //         return (
  //           <Fragment>
  //             <Layout>
  //               <Sider trigger={null} collapsible collapsed={state.collapsed}>
  //                 <div className="logo">
  //                   <img
  //                     src="https://picsum.photos/id/50/500"
  //                     wdith={60}
  //                     height={60}
                      
  //                   />
  //                 </div>

  //                 <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
  //                   <Menu.Item key="1" icon={<UserOutlined />}>
  //                     Quản lý người dùng
  //                   </Menu.Item>
  //                   <Menu.Item key="2" icon={<AimOutlined />}>
  //                     Quản lý thông tin vị trí
  //                   </Menu.Item>
  //                   <Menu.Item key="3" icon={<BankOutlined />}>
  //                     Quản lý thông tin phòng
  //                   </Menu.Item>
  //                 </Menu>
  //               </Sider>
  //               <Layout className="site-layout">
  //                 <Header
  //                   className="site-layout-background"
  //                   style={{ padding: 0, color: "#fff", fontSize: 20 }}
  //                 >
  //                   {React.createElement(
  //                     state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
  //                     {
  //                       className: "trigger",
  //                       onClick: toggle,
  //                     }
  //                   )}
  //                   <Space direction="vertical">
  //                     <Search
  //                       style={{ paddingTop: 20}}
  //                       placeholder="Nhập vào tên phòng"
  //                       onSearch={onSearch}
  //                       enterButton
  //                     />
  //                   </Space>
  //                   <UserOutlined style={{ marginLeft: 800 }} />

  //                   <Dropdown overlay={menu} trigger={["click"]}>
  //                     <a
  //                       className="ant-dropdown-link"
  //                       onClick={(e) => e.preventDefault()}
  //                     >
  //                       <CaretDownOutlined />
  //                     </a>
  //                   </Dropdown>
  //                 </Header>
  //                 <Content
  //                   className="site-layout-background"
  //                   style={{
  //                     margin: "24px 16px",
  //                     padding: 24,
  //                     minHeight: 280,
  //                   }}
  //                 >
  //                   <props.component {...propsRoute} />
  //                 </Content>
  //               </Layout>
  //             </Layout>
  //           </Fragment>
  //         );
  //       }}
  //     />
  //   </>
  // );
