import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import { GrMenu } from 'react-icons/gr';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';
import Navlogo from '../public/assets/laptop.png';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const iconSize = useMemo(() => ({ size: '1.5em' }), []);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[99] p-4 bg-[#ffffff]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex items-center justify-between">
          <Image src={Navlogo} alt="/" width="100" height="100" />
          <h3>dronkers.dev</h3>
        </div>
        <div>
          <ul className="hidden sm:flex">
            <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
              <a href="https://blog.dronkers.dev" target="_blank" rel="noreferrer noopener">Blog</a>
            </li>
          </ul>
          <div onClick={handleShowNav} onKeyUp={handleShowNav} role="button" tabIndex={0} className="sm:hidden">
            <GrMenu size={30} />
          </div>
        </div>
      </div>
      <div className={showNav ? 'sm:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          showNav
            ? 'fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%]  h-screen bg-[#ffffff] p-10 ease-in duration-200'
            : 'fixed left-[-100%] top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-200'
        }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={Navlogo} alt="dronkers.dev logo" width="100" height="100" />
              <div onClick={handleShowNav} onKeyUp={handleShowNav} role="button" tabIndex={0} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-50" aria-label="close navbar button">
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={handleShowNav} className="py-4 text-sm cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li onClick={handleShowNav} className="py-4 text-sm cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li onClick={handleShowNav} className="py-4 text-sm cursor-pointer">
                <a onClick={handleShowNav} href="https://blog.dronkers.dev" rel="noreferrer noopener">Blog</a>
              </li>
            </ul>
          </div>
          <div className="border-b border-t border-gray-300 my-4">
            <div className="">
              <div className="grid grid-cols-2 gap-3 place-items-center my-4">
                <a onClick={handleShowNav} className="rounded-lg shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-50" href="mailto:tim@dronkers.dev" aria-label="email link">
                  <IconContext.Provider value={iconSize}>
                    <MdEmail />
                  </IconContext.Provider>
                </a>
                <a onClick={handleShowNav} className="rounded-lg shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-50" href="assets/tim-dronkers-resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="download resume link">
                  <IconContext.Provider value={iconSize}>
                    <IoDocumentText />
                  </IconContext.Provider>
                </a>
                <a onClick={handleShowNav} className="rounded-lg shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-50" href="https://www.linkedin.com/in/timdronkers" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn link">
                  <IconContext.Provider value={iconSize}>
                    <FaLinkedin />
                  </IconContext.Provider>
                </a>
                <a onClick={handleShowNav} className="rounded-lg shadow-lg shadow--gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-50" href="https://github.com/tdronkers04" target="_blank" rel="noopener noreferrer" aria-label="github link">
                  <IconContext.Provider value={iconSize}>
                    <FaGithub />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
