import { Check } from 'lucide-react';
import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-10 items-center'>
            {/* text  */}
            <section className='col-span-2 space-y-5 flex flex-col items-center lg:items-start mb-4 lg:mb-0'>
                <small className='text-gray-400 font-semibold text-lg mb-5'>Get In Touch</small>
                <h1 className='mb-5 text-3xl lg:text-5xl text-white text-center lg:text-start'> <span className='text-primary'>Let’s Talk For your</span> Next Projects</h1>
                {/* <MorphingText texts={texts} /> */}
                <p className='text-gray-400 text-center lg:text-start'>Whether it's crafting intuitive front-end interfaces or building robust back-end systems, I am committed to delivering impactful solutions that meet user and business needs.</p>
                <div className='flex gap-4 items-center'>
                    <div className='p-2 bg-primary rounded-full'><Check /></div>
                    <p className='text-gray-400 font-semibold'>2+ Years of Learning Experience</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='p-2 bg-primary rounded-full'><Check /></div>
                    <p className='text-gray-400 font-semibold'>Professional Web Developer</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='p-2 bg-primary rounded-full'><Check /></div>
                    <p className='text-gray-400 font-semibold'>Professional Web Designer</p>
                </div>


            </section>
            {/* form  */}
            <section className='col-span-3'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 border-2 border-primary p-5 lg:p-10 rounded-xl'>
                    <div className="container col-span-2 lg:col-span-1">
                        <input required type="text" name="text" className="input" />
                        <label className="label">Full Name</label>
                    </div>
                    <div className="container col-span-2 lg:col-span-1">
                        <input required type="text" name="text" className="input" />
                        <label className="label">Email Address</label>
                    </div>
                    <div className="container col-span-2 lg:col-span-1">
                        <input required type="text" name="text" className="input" />
                        <label className="label">Phone Number</label>
                    </div>
                    <div className="container col-span-2 lg:col-span-1">
                        <input required type="text" name="text" className="input" />
                        <label className="label">Subject</label>
                    </div>
                    <div className="container col-span-2">
                        <textarea cols={100} rows={10} required  name="text" className="input !h-40" />
                        <label className="label">Message</label>
                    </div>
                    <div className='flex flex-col col-span-2'>
                    <button className="styled-button-2">
                        Send Message
                        <div className="inner-button">

                        </div>
                    </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;