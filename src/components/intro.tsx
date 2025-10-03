"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Ali from "@/Assets/images/Ali.png";
import { BsArrowRight, BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Ali}
              alt="Ali Raza"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-42 w-42 rounded-full object-cover border-[0.36rem] border-white shadow-xl"
            />
          </motion.div>
          {/* <span className='absulate bottom-0 right-0text-4xl'>
                👌
            </span>  */}
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Ali Raza Akram.</span> I'm a {""}
        <span className="font-bold"> Full Stack Web Developer </span>with{""}
        <span className="font-bold"> 2 years</span> of experience.I enjoy
        building
        <span className="italic"> websites & apps</span>. My focus is {""}
        <span className="underline">React(Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:slace-105"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-shadow" />
        </Link>
        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10"
          href="/Assets/images/resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-shadow" />
        </a>
        <a
          className="bg-white px-7 py-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin
            className="opacity-60 group-hover:translate-y-1 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          />
        </a>
        <a
          className="bg-white px-7 py-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10"
          href="https://github.com"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
