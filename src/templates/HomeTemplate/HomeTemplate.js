import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import Footer from "../../components/Footer/Footer";
export default function HomeTemplate(props) {//path,component,exact
    //Destructuring
    // const {Component,...restProps} = props;
    //return <Route {...restProps} : exact path={props.path}
    return <Fragment>
        <Route exact path={props.path} render={(propsRoute) => {//props.history,props.location,props.match
            return <Fragment>
                <Header />
                <CarouselHome {...propsRoute}/>
                {/* <props.component{...propsRoute} /> */}

                <Footer/>
            </Fragment>
        }} />
    </Fragment>

}
