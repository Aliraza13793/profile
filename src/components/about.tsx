"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

function About() {
  const {ref}=useSectionInView("About");
  return (
    <motion.section
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={ {delay: 0.175}}
    id='about'
    >
        <SectionHeading>About Me</SectionHeading>
        <p>
        After Graduation with a degree in{" "}
        <span className='font-medium'>Accounting & Finance</span>,I decided to pursue my passion for programming.I search on youtube and start to learning and then later{""}
        <span className='underline text-bold'> admission on PIAIC.</span> In PIAIC i learned{""}
        <span className='font-medium italic'> full-stack development</span>.{""}
        <span className='font-medium'> My favouite part of programming is</span> the problem-solving aspect. I <span className='underline'>Love</span> the feeling of finally figuring out a solution to a problem. My core stack is{""}
        <span className='font-medium italic'>
            Typescript, React, Next.js, Node.js.
        </span>
        <span>I am also familier with Javascript, Tailwind Css and HTML. I am always looking to learn new technologies. Over the last couple of years, you've immersed myself in the realm of software development, creating digital solutions with precision and ingenuity. My path as a developer has been characterized by continuous growth, as i have adeptly tackled new programming languages, frameworks, and methodologies. Each line of code i write combines functionality and grace, honing my skills into tools of innovation. Driven by a fervent desire to solve problems, my excel in crafting sleek user interfaces, fine-tuning algorithms for optimal performance, and troubleshooting complex systems. As technology evolves, my commitment to excellence and insatiable thirst for knowledge propel  towards greater achievements in my software development journey.
        </span> I am currently looking for a{""}<span className='font-medium'> Full-time Position</span> as a software developer.
        </p>
        <br/>
        <p>
            <span className='font-medium '>When i am not coding
            <span/>, I enjoy palying
            Cricket, watching movies. I also like {""}
            <span>traveling to Northren Areas of Pakistan</span>
            <span className='font-medium underline'> I just Loveing it</span>.
            </span>
        </p>
    </motion.section>
  )
}

export default About