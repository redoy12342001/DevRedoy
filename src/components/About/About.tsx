import React from 'react'
import "./About.css"
import {  Mail, PhoneCallIcon } from 'lucide-react'
// import { MorphingText } from '../magicui/morphing-text'

const About = () => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10 m-4'>
            {/* text section */}
            <section className='lg:p-10'>
                <small className='text-gray-400 font-semibold text-lg mb-5 text-center'>About Me</small>
                <h1 className='mb-5 text-3xl text-center lg:text-start lg:text-5xl'>Professional <span className='text-primary'>Web Developer</span> For Your Digital Business</h1>
                {/* <MorphingText texts={texts} /> */}
                <p className='text-center lg:text-start'>Hi, I'm a passionate MERN stack developer with a strong enthusiasm for building modern web applications.
                    My journey into programming started with a curiosity for how websites and applications work. That curiosity led me to learn the MERN stack through Programming Hero, where I built various projects that solidified my skills in React, Node.js, Express, and MongoDB.
                    I enjoy solving complex problems, developing user-friendly interfaces, and working on real-world projects that make an impact. My current focus is on React and Next.js, where I create scalable, efficient, and engaging applications.
                    Beyond coding, I'm a huge gaming enthusiast! Whether it's exploring open-world adventures or competing in fast-paced multiplayer games, I love the challenge and excitement gaming brings. I also enjoy exploring new technologies and keeping up with the latest trends in web development.
                    I believe in continuous learning, and I'm always looking for opportunities to grow as a developer. My goal is to contribute to meaningful projects and collaborate with like-minded individuals to create something amazing!</p>
                <div>

                    {/* social box  */}
                    <div className="mt-10 styled-button flex flex-col items-start justify-start gap-5">
                        <div className='flex gap-3'>
                            <div className='p-3 rounded-full text-black bg-primary'>
                                <Mail className='' />
                            </div>
                            <div className='flex items-start flex-col'>
                                <p className='text-gray-400'>Email Me: </p>
                                <p>bodruddozaredoy@gmail.com</p>
                            </div>
                        </div>
                        <hr className='border-1 border-primary w-full' />
                        <div className='flex gap-3'>
                            <div className='p-3 rounded-full text-black bg-primary'>
                                <PhoneCallIcon className='' />
                            </div>
                            <div className='flex items-start flex-col'>
                                <p className='text-gray-400'>Whatsapp Me: </p>
                                <p>+880 175 838 69</p>
                            </div>
                        </div>
                        <hr className='border-1 border-primary w-full' />
                    </div>

                </div>
            </section>
            {/* img section  */}
            <section className='lg:pl-60 mt-10 lg:mt-0'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='img-shadow' src="/images/aboutme-img.png" alt="" />
            </section>

        </div>
    )
}

export default About