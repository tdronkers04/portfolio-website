import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import timphoto from '../public/assets/tim_circle.png';

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <Image alt="tim" src={timphoto} width={250} height={250} />
        <div>
          <div>
            <h1 className="py-4 text-gray-700 text-2xl">
              Hi, I&#39;m
              {' '}
              <span className="">Tim </span>
              <span role="img" aria-label="waving hand">👋</span>
            </h1>
            <p className="py-4 text-gray-600 max-w-[70%] md:max-w-[60%] lg:max-w-[40%] m-auto">
              I&#39;m a software engineer based in Broomfield, CO.
              I love building fast, scalable cloud applications.
              Recently I co-created Seymour, an open-source,
              easy-to-configure active monitoring solution.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedin />
                </div>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <Link href="/">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;
