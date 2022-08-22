import Image from 'next/image';
import React from 'react';
import seymourLogo from '../public/assets/seymour_text.png';
import seymourMap from '../public/assets/seymour_map.png';

function Seymour() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div id="seymour-logo" className="image-container md:max-w-[400px]">
            <Image alt="seymour logo" src={seymourLogo} layout="responsive" className="image" />
          </div>
          <h2 className="py-4 text-gray-700 text-xl md:text-2xl">Open-source easy-to-configure active monitoring</h2>
          <p>
            Seymour is an open-source and easy-to-configure active monitoring solution that allows users to simulate requests from globally distributed locations to test their API endpoints. For each test, Seymour measures the availability, response time, and correctness of the API endpoint response. We built Seymour to help engineering teams bolster existing testing approaches and handle the challenges of monitoring their increasingly complex systems. It enables rapid detection of issues in production before users experience them. Seymour's infrastructure is easily deployed on an AWS account with two CLI commands.
          </p>
          <br />
          <p>
            Read our
            {' '}
            <a className="text-[#011e6f] font-bold underline" href="https://seymour-active-monitoring.github.io/">case study</a>
            {' '}
            to learn about the engineering behind Seymour
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={seymourMap} className="rounded-xl" alt="/" />
        </div>
        <div />
      </div>
    </div>
  );
}

export default Seymour;
