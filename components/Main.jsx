import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import timphoto from '../public/assets/tim_circle.png';

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col items-center">
        <div id="profile-picture" className="image-container md:max-w-[250px]">
          <Image alt="tim" src={timphoto} layout="responsive" className="image" />
        </div>
        <div id="intro">
          <div>
            <h1 className="py-4 text-gray-700 text-2xl md:text-3xl">
              Hi, I&#39;m
              {' '}
              <span className="">Tim </span>
              <span role="img" aria-label="waving hand">👋</span>
            </h1>
            <p className="py-4 text-gray-600 text-lg md:text-xl max-w-[70%] md:max-w-[60%] lg:max-w-[50%] m-auto">
              I&#39;m a software engineer based in Colorado.
              I love building fast, scalable cloud applications.
              Recently I co-created
              {' '}
              <span className="font-Lexend text-[#011e6f]"><a href="#seymour">Seymour</a></span>
              , an open-source,
              easy-to-configure active monitoring solution. Thanks for stopping by!
            </p>
            <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
              <a className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" href="https://www.linkedin.com/in/timdronkers/">
                <FaLinkedin />
              </a>
              <a className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" href="https://github.com/tdronkers04">
                <FaGithub />
              </a>
              <a className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" href="mailto:tim@dronkers.dev">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
