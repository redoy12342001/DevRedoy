import { ArrowRight } from 'lucide-react';
import React from 'react';
import "./Projects.css"

const projects = [
    {
        title: "Dine Flow",
        img: "https://techviral.net/wp-content/uploads/2016/08/Capture-Full-Webpage-Screenshot-2-1.jpg",
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
        <div className='flex flex-col justify-center items-center'>
            <small className='text-gray-400 font-semibold text-lg mb-5'>Latest Projects</small>
            <h1 className='mb-5 text-5xl text-white text-center leading-normal'>Explore My Popular <br /><span className='text-primary'>Projects</span></h1>
            {/* projects */}
            <div>
                {
                    projects.map((project, index) => (
                        <div key={index} className={`flex items-center  ${index % 2 !== 0 && 'flex-row-reverse'}`}>
                            <div className=' m-10 w-1/2'>
                                <div className=' border-4 border-primary rounded-xl h-[350px] overflow-y-scroll custom-scrollbar hide-scrollbar'>
                                    <img className='rounded-xl w-full ' src={project.img} alt="" />
                                </div>
                            </div>
                            <div className='m-10 flex flex-col gap-10 items-start w-1/2'>
                                <p className='font-semibold text-lg text-primary'>{project.category}</p>
                                <h1 className='text-3xl font-bold text-white'>{project.title}</h1>
                                <p className='text-gray-400 font-semibold text-lg'>{project.desc}</p>
                                <div className='rounded-full p-3 bg-black text-white cursor-pointer hover:bg-primary hover:text-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <div className='bg-primary py-3 px-6 font-semibold rounded-xl flex gap-2 items-center mt-5'>View More Projects <ArrowRight className='font-bold'/></div> */}
            <button className="button mt-10">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">View More Projects</span>
                </span>
            </button>
        </div>
    );
};

export default Projects;