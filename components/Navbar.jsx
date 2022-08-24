import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { GrMenu } from 'react-icons/gr';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navlogo from '../public/assets/laptop.png';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[99] p-4 bg-[#ffffff]'">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex items-center justify-between">
          <Image src={Navlogo} alt="/" width="100" height="100" />
          <h3>dronkers.dev</h3>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">About</li>
            </Link>
            <a href="https://blog.dronkers.dev/">
              <li className="ml-10 text-sm uppercase hover:border-b">Blog</li>
            </a>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link>
          </ul>
          <div onClick={handleShowNav} onKeyUp={handleShowNav} role="button" tabIndex={0} className="md:hidden">
            <GrMenu size={30} />
          </div>
        </div>
      </div>
      <div className={showNav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          showNav
            ? 'fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%]  h-screen bg-[#ffffff] p-10 ease-in duration-300'
            : 'fixed left-[-100%] top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-300'
        }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={Navlogo} alt="dronkers.dev logo" width="100" height="100" />
              <div onClick={handleShowNav} onKeyUp={handleShowNav} role="button" tabIndex={0} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-50">
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={handleShowNav} className="py-4 text-sm cursor-pointer">Home</li>
              </Link>
              <Link href="/about">
                <li onClick={handleShowNav} className="py-4 text-sm cursor-pointer">About</li>
              </Link>
              <a onClick={handleShowNav} href="https://blog.dronkers.dev/">
                <li className="py-4 text-sm">Blog</li>
              </a>
              <Link href="/">
                <li onClick={handleShowNav} className="py-4 text-sm cursor-pointer">Resume</li>
              </Link>
            </ul>
          </div>
          <div className="border-b border-t border-gray-300 my-4">
            <div className="">
              <div className="flex items-center justify-between my-4 w-full">
                <a className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-50" href="https://www.linkedin.com/in/timdronkers">
                  <FaLinkedin />
                </a>
                <a className="rounded-full shadow-lg shadow--gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-50" href="https://github.com/tdronkers04">
                  <FaGithub />
                </a>
                <a className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-50" href="mailto:tim@dronkers.dev">
                  <AiOutlineMail />
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
