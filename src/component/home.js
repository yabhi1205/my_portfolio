import React from 'react';
import '../CSS/home.css'
import ReactTypingEffect from 'react-typing-effect';
const Home = () => {
    // const nav = document.querySelector("nav");

    // window.addEventListener("scroll", function () {
    //     nav.classList.toggle("scroll", window.scrollY > 0);
    // });
    return (
        <>
            <div className="branding">
                <div className="wra">
                    <h1>Abhinav Yadav</h1>
                    <div>
                        <ReactTypingEffect
                            eraseSpeed={50}
                            text={['FullStack Web Developer', 'Coder', 'Photo Editor', 'Python']} />
                    </div>

                </div>
            </div>
            <section className="skills">
                <div className="container">
                    <div className="skills_branding">
                        <h1>Skills</h1>
                    </div>

                    <div className="flex html">
                        <i className="fa-brands fa-html5"></i>
                        <h2>HTML</h2>
                        <div className="meter orange nostripes flex">
                            <span style={{ "width": "80%" }}></span>
                            <span className="ending"></span>
                        </div>
                    </div>
                    <div className="flex html">
                        <i class="fa-brands fa-js"></i>
                        <h2>JS</h2>
                        <div className="meter orange nostripes flex">
                            <span style={{ "width": "70%" }}></span>
                            <span className="ending"></span>
                        </div>
                    </div>
                    <div className="flex html">
                        <i class="fa-brands fa-css3-alt"></i>
                        <h2>CSS</h2>
                        <div className="meter orange nostripes flex">
                            <span style={{ "width": "55%" }}></span>
                            <span className="ending"></span>
                        </div>
                    </div>
                    <div className="flex html">
                        <i class="fa-brands fa-react"></i>
                        <h2>React</h2>
                        <div className="meter orange nostripes flex">
                            <span style={{ "width": "50%" }}></span>
                            <span className="ending"></span>
                        </div>
                    </div>
                    <div className="flex html">
                        <i class="fa-brands fa-node-js"></i>
                        <h2>Node.js</h2>
                        <div className="meter flex orange nostripes">
                            <span style={{ "width": "70%" }}></span>
                            <span className="ending"></span>
                        </div>
                    </div>
                    <div className="flex html">
                        <i class="fa-brands fa-python"></i>
                        <h2>Python</h2>
                        <div className="meter orange nostripes flex">
                            <span style={{ "width": "60%" }}></span>
                            <span className="ending"></span>
                        </div>
                    </div>
                    <div className="flex html">
                        {/* <i class="fa-solid fa-pen" style={{ fontSize: '2rem' }}></i> */}
                        <i style={{ fontSize: '2rem' }} class="fa-solid fa-pen-to-square"></i>
                        <h2>PS</h2>
                        <div className="meter orange nostripes flex">
                            <span style={{ "width": "55.3%" }}></span>
                            <span className="ending"></span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="branding">
                <div className="wra">
                    <h1>Abhinav Yadav</h1>
                    <div>
                        <ReactTypingEffect
                            eraseSpeed={50}
                            text={['FullStack Web Developer', 'Coder', 'Photo Editor', 'Python']} />
                    </div>

                </div>
            </div>
        </>
    )
}


export default Home