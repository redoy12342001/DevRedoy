"use client"
import React from 'react'
// import { motion, useScroll } from 'motion/react';
// import CodePreview from '@/components/CodePreview';
import Banner from '@/components/Banner/Banner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

const HomePage = () => {
  // const { scrollYProgress } = useScroll()
  return (
    <div className='relative lg:mx-[70px]'>
      <header className='lg:my-20'>
        <Banner />
      </header>
      <main className='space-y-40'>
        {/* about section  */}
        <section className='text-white lg:pt-40'>
          <About />
        </section>

        {/* services section  */}
        <section>
          <Services />
        </section>

        {/* skills section  */}
        <section>
          <Skills />
        </section>

        {/* projects  */}
        <section>
          <Projects />
        </section>

        {/* Contacts  */}
        <section>
          <Contact />
        </section>
      </main>


    </div>
  )
}

export default HomePage