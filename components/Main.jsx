import Image from 'next/image';
import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';
import timphoto from '../public/assets/tim_circle.png';

function Main() {
  const iconSize = useMemo(() => ({ size: '1.5em' }), []);

  return (
    <div id="intro" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col items-center">
        <div className="mt-[6rem] md:mt-[8rem] 2xl:mt-[10rem]">
          <Image alt="tim" src={timphoto} priority width={250} height={250} />
        </div>
        <div id="intro">
          <div>
            <h1 className="py-4 text-gray-700 text-2xl md:text-3xl">
              Hi, I&#39;m
              {' '}
              <span className="">Tim </span>
              <span role="img" aria-label="waving hand">👋</span>
            </h1>
            <p className="py-4 text-gray-600 text-lg md:text-xl max-w-[90%] md:max-w-[85%] lg:max-w-[65%] m-auto">
              I&#39;m a software engineer with experience developing full-stack,
              cloud-native applications with great UIs. I write code that is human-friendly,
              testable and robust. I love learning and do my best work in teams. Recently I
              co-created
              {' '}
              <span className="font-Lexend text-[#011e6f]"><a href="#seymour">Seymour</a></span>
              , an open-source, easy-to-configure active monitoring tool that enables continuous
              testing of production API endpoints.
            </p>
            <div className="hidden sm:flex items-center justify-between max-w-[300px] md:max-w-[400px] m-auto py-4">
              <a className="rounded-lg shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-50" title="e-mail" href="mailto:tim@dronkers.dev" aria-label="email link">
                <IconContext.Provider value={iconSize}>
                  <MdEmail />
                </IconContext.Provider>
              </a>
              <a className="rounded-md shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-50" title="resume" href="assets/tim-dronkers-resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="download resume link">
                <IconContext.Provider value={iconSize}>
                  <IoDocumentText />
                </IconContext.Provider>
              </a>
              <a className="rounded-lg shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-50" title="LinkedIn" href="https://www.linkedin.com/in/timdronkers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn link">
                <IconContext.Provider value={iconSize}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
              <a className="rounded-lg shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-50" title="GitHub" href="https://github.com/tdronkers04" target="_blank" rel="noopener noreferrer" aria-label="github link">
                <IconContext.Provider value={iconSize}>
                  <FaGithub />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
