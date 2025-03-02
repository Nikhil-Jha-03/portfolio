import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ scrollToView, contactRef, projectRef, skillRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white py-6 px-5 flex justify-between items-center">

      <div className="Name">
        <h1 className="text-3xl poppins-semibold">NIKHIL JHA.</h1>
      </div>

 
      <div className="hidden md:flex gap-10">
        <button onClick={() => scrollToView(skillRef)} className="text-xl poppins-medium cursor-pointer">Skills</button>
        <button onClick={() => scrollToView(projectRef)} className="text-xl poppins-medium cursor-pointer">Projects</button>
        <button onClick={() => scrollToView(contactRef)} className="text-xl poppins-medium cursor-pointer">Contact</button>
      </div>


      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-5 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-5 flex flex-col gap-5 md:hidden transition-all duration-300 ease-in-out">
          <button onClick={() => { scrollToView(skillRef); setIsOpen(false); }} className="text-xl poppins-medium cursor-pointer">Skills</button>
          <button onClick={() => { scrollToView(projectRef); setIsOpen(false); }} className="text-xl poppins-medium cursor-pointer">Projects</button>
          <button onClick={() => { scrollToView(contactRef); setIsOpen(false); }} className="text-xl poppins-medium cursor-pointer">Contact</button>
        </div>
      )}
    </div>
  );
};

export default Header;
