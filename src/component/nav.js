import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
export default () => {
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

//  Nav