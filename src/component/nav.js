import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../App.css"
const Nav = () => {
    let navigate = useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid justify-content-between me-2">
                    <div className="container">
                        <NavLink className="navbar-brand" to={"#"}>Abhinav Yadav</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className=" navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mujhe">
                                <NavLink className="nav-link " style={({ isActive }) => {return { color: isActive ? "black" : "" };}}  to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={({ isActive }) => {return { color: isActive ? "black" : "" };}} to={"skills"}>Skills</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={({ isActive }) => {return { color: isActive ? "black" : "" };}} to={"projects"}>Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={({ isActive }) => {return { color: isActive ? "black" : "" };}} to={'posts'}>Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={({ isActive }) => {return { color: isActive ? "black" : "" };}} to={'about'}>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav