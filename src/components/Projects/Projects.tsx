import { ArrowRight } from 'lucide-react';
import React from 'react';

const projects = [
    {
        title: "Dine Flow",
        img: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces",
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
                        <div key={index} className='grid grid-cols-1 md:grid-cols-2 items-center direction-reverse'>
                            <div className='border-3 border-primary m-20 rounded-xl p-5'>
                                <img className='rounded-xl' src={project.img} alt="" />
                            </div>
                            <div className='m-10 flex flex-col gap-10 items-start'>
                                <p className='font-semibold text-lg text-primary'>{project.category}</p>
                                <h1 className='text-xl font-bold'>{project.title}</h1>
                                <p className='text-gray-400 font-semibold text-lg'>{project.desc}</p>
                                <div className='rounded-full p-3 bg-black text-white'>
                                    <ArrowRight/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;