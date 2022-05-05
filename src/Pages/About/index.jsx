import React from "react";
import { BodyAboutMe } from "../../Components/BodyAboutMe";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";



export default function AboutMePage (){

    return (
        <React.Fragment>
            <Header></Header>
            <BodyAboutMe></BodyAboutMe>
            <Footer></Footer>
        </React.Fragment>
    )
}