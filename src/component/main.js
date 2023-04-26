import React from "react";
import Nav from "./nav";
import Home from './home'
const Main = () => {
    // const nav = document.querySelector("nav");

    // window.addEventListener("scroll", function (e) {
    //     // console.log(e)
    //     // console.log(window.scrollY)
    //     // console.log(nav)

    //     // nav.classList.toggle("scroll", window.scrollY > 0);
    // });
    return (
        <>
            <Nav effect={true} />
            <Home />
        </>
    )
}

export default Main