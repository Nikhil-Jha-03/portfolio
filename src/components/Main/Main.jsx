import React from 'react'
import profile from "../../assets/profile.svg"
import SocialLinks from './SocialLinks';
import { FaDownload, FaPaperPlane } from "react-icons/fa";

function Main({scrollToView,contactRef}) {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-16 text-white my-56 md:my-80 w-full items-center select-none duration-300'>
      <div className="Info w-full md:w-2/4 flex flex-col gap-5">
        <h1 className='text-6xl  poppins-semibold'>Hi, <span className='text-[#00f5ff]'> I'm Nikhil Jha,</span></h1>
        <h2 className='poppins-regular text-xl w-[90%] '> A passionate web developer and backend enthusiast currently pursuing a B.Tech in Computer Engineering. I love building scalable and efficient web applications, solving complex problems, and continuously learning new technologies.</h2>

        <div>
          <SocialLinks />
        </div>

        <div className="flex gap-6 mt-2">
          <a
            href="/Nikhil-Jha-Resume.pdf"
            download
            className="group flex items-center gap-3 px-8 py-3 text-black text-lg font-semibold rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-white/50 poppins-regular"
          >
            <FaDownload className="text-xl group-hover:animate-bounce " />
            Resume
          </a>

          <button
            onClick={()=> scrollToView(contactRef) }
            className="group flex items-center gap-3 px-8 py-3 text-white text-lg font-semibold rounded-full bg-black border border-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-white/30 poppins-regular"
          >
            <FaPaperPlane className="text-xl group-hover:rotate-12 transition-all" />
            Contact Me
          </button>
        </div>

      </div>

      <div className="hidden md:w-2/4 md:flex justify-center duration-300 opacity-0 md:opacity-100">
        <div className="image w-[90%] xl:w-xl">
          <img className='w-full' src={profile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main;