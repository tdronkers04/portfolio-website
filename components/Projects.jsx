import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Trellific from './projects/Trellific';
import GameAlert from './projects/GameAlert';
import HoneyDoList from './projects/HoneyDoList';
import AirlineRoutes from './projects/AirlineRoutes';

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="border-t border-gray-700 py-12 text-gray-700 flex justify-center text-xl md:text-2xl">More Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Trellific />
          <GameAlert />
          <HoneyDoList />
          <AirlineRoutes />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-[#011e6f]"
                size={30}
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Projects;