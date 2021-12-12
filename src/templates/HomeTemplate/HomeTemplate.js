import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import DanhSachPhong from "../../pages/DanhSachPhong/DanhSachPhong";
export default function HomeTemplate(props) {
  //path,component,exact
  //Destructuring
  // const {Component,...restProps} = props;
  //return <Route {...restProps} : exact path={props.path}
  return (
    <>
      <Route
        exact
        path={props.path}
        render={(propsRoute) => {
          //props.history,props.location,props.match
          return (
            <>
              <props.component {...propsRoute} />
              <Footer />
            </>
          );
        }}
      />
    </>
  );
}
