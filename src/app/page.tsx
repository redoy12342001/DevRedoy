"use client"
import React from 'react'
// import { motion, useScroll } from 'motion/react';
// import CodePreview from '@/components/CodePreview';
import Banner from '@/components/Banner/Banner';
import About from '@/components/About/About';

const HomePage = () => {
  // const { scrollYProgress } = useScroll()
  return (
    <div className='relative mx-[70px]'>
      <header className=' my-10'>
        <Banner />
      </header>
      <main className='space-y-10'>
        <section className='text-white'>
          <About/>
        </section>
      </main>


    </div>
  )
}

export default HomePage