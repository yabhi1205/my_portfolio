import React from 'react';
import '../CSS/home.css'
// import { useState } from 'react';
// import { useEffect } from 'react';
export default () => {
    return (
        <>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="branding">
                        <h1>Abhinav Yadav</h1>
                        <h2>Full Stack Web Developer</h2>
                    </div>
                </div>
                {/* <div className="carousel-item" id='PythonCoderDiv'>
                    <div className="branding">
                        <h1>Abhinav Yadav</h1>
                        <h2 id="PythonCoder"
                        >Python Coder</h2>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="branding" >
                        <h1>Abhinav Yadav</h1>
                        <h2>Photo Editor</h2>
                    </div>
                </div> */}
            </div>
        </>
    )
}