import React from 'react';
import Marquee from "react-fast-marquee";
import "./Skills.css"


const skills = [
    {
        title: "Javascript",
        img:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
    },
    {
        title: "Javascript",
        img:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
    },
    {
        title: "Javascript",
        img:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
    },
]

const Skills = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center'>
            <small className='text-gray-400 font-semibold text-lg mb-5'>About Me</small>
            <h1 className='mb-5 text-5xl text-white text-center leading-normal'>Let’s Explore Popular <br /><span className='text-primary'>Skills & Experience</span></h1>
            {/* <MorphingText texts={texts} /> */}
            <p className='text-gray-400'>These are my skills that's I learned over 2 years</p>
            <Marquee style={{width: "90%", margin: "50px 0px", padding: "20px 0"}} pauseOnHover={true}>
                {/* skill  */}
                
                {
                    skills.map((skill, index) => (
                        <div className='img-shadow py-4 px-3 flex flex-col items-center justify-center mr-10' key={index}>
                            <img src={skill.img} alt="" />
                            <h1 className='text-white font-semibold'>{skill.title}</h1>
                            <div className='rounded-xl bg-black mx-1 text-center py-1 px-5 mt-4'>
                                <p className='text-gray-400 font-semibold'>50%</p>
                            </div>
                        </div>
                    )) 
                }

            </Marquee>
        </div>
    );
};

export default Skills;