import React from 'react';
import Marquee from "react-fast-marquee";
import "./Skills.css"


const Skills = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center'>
            <small className='text-gray-400 font-semibold text-lg mb-5'>About Me</small>
            <h1 className='mb-5 text-5xl text-white text-center leading-normal'>Let’s Explore Popular <br /><span className='text-primary'>Skills & Experience</span></h1>
            {/* <MorphingText texts={texts} /> */}
            <p className='text-gray-400'>These are my skills that's I learned over 2 years</p>
            {/* <Marquee> */}
                {/* skill  */}
                <div className="containerCustom noselect">
                    <div className="canvasCustom">
                        <div className="tracker tr-1"></div>
                        <div className="tracker tr-2"></div>
                        <div className="tracker tr-3"></div>
                        <div className="tracker tr-4"></div>
                        <div className="tracker tr-5"></div>
                        <div className="tracker tr-6"></div>
                        <div className="tracker tr-7"></div>
                        <div className="tracker tr-8"></div>
                        <div className="tracker tr-9"></div>
                        <div id="card">
                            <div className="card-content">
                                <div className="card-glare"></div>
                                <div className="cyber-lines">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                                <p id="prompt"><img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="" /></p>
                                <p className='text-white font-bold absolute bottom-[70px] left-[50px]'>Javascript</p>
                                <div className="title">Javasctipt</div>
                                <div className="glowing-elements">
                                    <div className="glow-1"></div>
                                    <div className="glow-2"></div>
                                    <div className="glow-3"></div>
                                </div>
                                {/* <div className="subtitle">
                                    <span>INTERACTIVE</span>
                                    <span className="highlightCustom">3D EFFECT</span>
                                </div> */}
                                <div className="card-particles">
                                    <span></span><span></span><span></span> <span></span><span></span
                                    ><span></span>
                                </div>
                                <div className="corner-elements">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                                <div className="scan-line"></div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* </Marquee> */}
        </div>
    );
};

export default Skills;