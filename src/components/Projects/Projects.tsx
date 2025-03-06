import React from 'react';
import "./Projects.css"

const projects = [
    {
        title: "Dine Flow",
        img: "/images/project1.png",
        desc: "DineFlow is a modern Restaurant Management System designed to enhance dining experiences by streamlining order management, payments, and customer engagement. It provides restaurants with a custom-branded digital platform to increase sales, reduce costs, and improve customer loyalty.",
        category: "Web Development"
    },
    {
        title: "Dine Flow",
        img: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces",
        desc: "DineFlow is a modern Restaurant Management System designed to enhance dining experiences by streamlining order management, payments, and customer engagement. It provides restaurants with a custom-branded digital platform to increase sales, reduce costs, and improve customer loyalty.",
        category: "Web Development"
    },
]

const Projects = () => {
    return (
        <div className='flex flex-col justify-center items-center '>
            <small className='text-gray-400 font-semibold text-lg mb-5'>Latest Projects</small>
            <h1 className='mb-5 text-3xl lg:text-5xl text-white text-center leading-normal'>Explore My Popular <br /><span className='text-primary'>Projects</span></h1>
            {/* projects */}
            <div className='flex flex-col items-center justify-center'>
                {
                    projects.map((project, index) => (
                        <div key={index}>
                            <div  className={`lg:flex items-center justify-center w-full  ${index % 2 !== 0 && 'flex-row-reverse'}`}>
                                <div className=' lg:m-10 lg:w-1/2'>
                                    <div className=' border-4 border-primary rounded-xl w-full h-[200px] md:h-[350px] overflow-y-scroll custom-scrollbar hide-scrollbar'>
                                        <img className='rounded-xl w-full ' src={project.img} alt="" />
                                    </div>
                                </div>
                                <div className='lg:m-10 mt-4 lg:mt-0 flex flex-col gap-5 lg:gap-10 items-center lg:items-start lg:w-1/2'>
                                    <p className='font-semibold text-lg text-primary text-center lg:text-start'>{project.category}</p>
                                    <h1 className='text-3xl font-bold text-white text-center lg:text-start'>{project.title}</h1>
                                    <p className='text-gray-400 font-semibold text-lg text-center lg:text-start'>{project.desc}</p>
                                    <div className='rounded-full p-3 bg-black text-white cursor-pointer hover:bg-primary hover:text-black'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                    </div>
                                </div>

                            </div>
                            <hr className='border-primary w-full flex lg:hidden my-5' />

                        </div>
                    ))
                }
            </div>
            {/* <div className='bg-primary py-3 px-6 font-semibold rounded-xl flex gap-2 items-center mt-5'>View More Projects <ArrowRight className='font-bold'/></div> */}
            <button className="button mt-5 lg:mt-10">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">View More Projects</span>
                </span>
            </button>
        </div>
    );
};

export default Projects;