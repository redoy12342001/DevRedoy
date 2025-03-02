import React from 'react'
import { BannerIconCloud } from './IconCloud'
import { cn } from "@/lib/utils";
import { DotPattern } from '../magicui/dot-pattern';
import { ArrowRightIcon } from 'lucide-react';
import { ShimmerButton } from '../magicui/shimmer-button';
import { NumberTicker } from '../magicui/number-ticker';


const overview = [
  {
    num: 2,
    text: "Years of Learning"
  },
  {
    num: 10,
    text: "Projects Completed"
  },
  {
    num: 20,
    text: "Skills Learned"
  },
]

const Banner = () => {
  return (
    <div className='containerPattern'>
      <div className='grid grid-cols-12 justify-between items-center w-full relative flex-col md:flex-row '>
        {/* <Meteors number={30} /> */}
        {/* 1st grid  */}
        <div className='col-span-4 space-y-5 '>
          <p className='text-muted font-semibold text-2xl'>Hello, I&apos;m</p>
          <h1 className='font-bold text-6xl text-primary'>Bodruddoza <br /> Redoy</h1>
          <p className='font-bold text-white text-3xl'>React Js Developer</p>
          <div className='flex gap-5 items-center font-light bg-primary p-3 rounded-full lg:mr-[210px]'>
            <ShimmerButton className="shadow-2xl bg-primary">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Hire Me
              </span>
            </ShimmerButton>
            {/* <SparklesText className={cn("text-3xl underline")} text='Download Resume'/> */}
            <p className='font-semibold underline flex text-lg items-center gap-2 cursor-pointer'>Download Resume <span><ArrowRightIcon /></span> </p>
            {/* <ShinyButton >Download Resume</ShinyButton> */}
            {/* <InteractiveHoverButton>Resume</InteractiveHoverButton> */}
          </div>
        </div>

        {/* 2nd grid  */}
        <div className='col-span-5'>
          <BannerIconCloud />
        </div>

        {/* 3rd grid */}
        <div className='col-span-3 flex items-start justify-center md:ml-[15rem] md:flex-col gap-10'>
          {overview.map((i, index) => (
            <div className='space-y-3' key={index}>
              {/* <p className='text-primary font-bold text-4xl'>{i.num}</p> */}
              <div className='flex items-center gap-2 font-bold'>
              <NumberTicker
                value={i.num}
                className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-primary dark:text-white"
              />
              <p className='text-primary'>+</p>
              </div>
              <p className='text-muted font-bold text-xl'>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      /> */}
    </div>
  )
}

export default Banner