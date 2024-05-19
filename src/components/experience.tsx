"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

function Experience() {
    const {ref}=useSectionInView("Experience");
  return (
    <motion.section ref={ref} id='experience' className='mb-28 max-w-[45rem] icon-center text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={ {delay: 0.175}}>
    <SectionHeading>My Experience</SectionHeading>
    {/* <VerticalTimeline>
    {experiencesData.map((item, index) => (
            <React.Fragment key={index}>            
            <VerticalTimelineElement
            contentStyle={{
                background:"#f3f4f6",
                boxShadow:"none",
                border:"1px solid rgba(0, 0, 0, 0.05)",
                textAlign:"left",
                padding:"1.3rem 2rem",
            }}
            contentArrowStyle={{
                borderRight:"0.4rem solid #9ca3af",

            }}
            date={item.date}
            icon={item.icon}
        iconStyle={
            {
                background:"white",
                fontSize:"1.5rem",
            }
        }
            >
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <p>{item.description}</p>
                 </VerticalTimelineElement>
            </React.Fragment>

        ))
    }

    </VerticalTimeline> */}
    <div className='bg-gray-200'>{
        experiencesData.map((item, index)=>(
            <React.Fragment key={index}>
                <h4 className='flex justify-center text-4xl'>{item.icon}</h4>
                <p className='italic'>{item.date}</p>
                <h3 className='font-bold text-2xl text-gray-500'>{item.title}</h3>
                <p>{item.location}</p>
                <p className='!font-normal text-gray-700 italic underline'>{item.description}</p>
                
                
            </React.Fragment>

        ))
    }
    </div>
    </motion.section>
    
  );
}

export default Experience