import React from 'react';
import "./Services.css"
import { CircleArrowOutUpRight } from 'lucide-react';

const services = [
    {
        title: "Web Development",
        desc: "Here am I for your solution"
    },
    {
        title: "Web Development",
        desc: "Here am I for your solution"
    },
    {
        title: "Web Development",
        desc: "Here am I for your solution"
    },
    {
        title: "Web Development",
        desc: "Here am I for your solution"
    },
]

const Services = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            <small className='text-gray-400 font-semibold text-lg mb-5 text-center'>Popular Services</small>
            <h1 className='mb-5 text-5xl text-white text-center leading-normal'>My <span className='text-primary'>Special Service</span> For your <br /> Business Development</h1>
            {/* services box */}
            <div className='grid grid-cols-2 items-center gap-20'>
                {services.map((service, index) => (
                    <div key={index} className="customCard flex justify-between gap-10">
                        <p className='text-primary text-xl font-bold'>0{index+1}.</p>
                        <div className='flex items-center gap-10'>
                            <div>
                                <h1 className='font-semibold text-2xl mb-3'>{service.title}</h1>
                                <p className='text-gray-400 text-sm'>{service.desc}</p>
                            </div>
                            <div className='p-3 bg-black rounded-full hover:bg-primary cursor-pointer hover:text-black'>
                                <CircleArrowOutUpRight />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;