import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import "../App.css"
const Nav = (props) => {
    useEffect(() => {
        if (props.effect) {
            const nav = document.querySelector(".navbar");
            nav.classList.toggle("scroll", window.scrollY < 1);
            window.addEventListener("scroll", function (e) {
                nav.classList.toggle("scroll", window.scrollY < 1);
            });
        }
    }, [])

    return (
        <>
            <div className="navbar ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"}>Abhinav Yadav</NavLink>
                    <div className="navbar-nav">
                        <NavLink className="nav-link " to={"/"}>Home</NavLink>
                        <NavLink className="nav-link" to={"/projects"}>Projects</NavLink>
                        <NavLink className="nav-link" to={"/posts"}>Posts</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav