/* eslint-disable max-len */
import Image from 'next/image';
import React from 'react';
import seymourLogo from '../public/assets/seymour_text.png';
import seymourMap from '../public/assets/seymour_map.png';

function Seymour() {
  return (
    <div id="seymour" className="w-full h-screen px-4 py-16 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div id="seymour-logo" className="image-container md:max-w-[400px]">
            <a href="https://seymour-active-monitoring.github.io/">
              <Image alt="seymour logo" src={seymourLogo} layout="responsive" className="image" />
            </a>
          </div>
          <h2 className="py-4 text-gray-700 text-xl md:text-2xl">Active Monitoring for API endpoints</h2>
          <p>
            Seymour is an open-source and easy-to-configure active monitoring solution that allows users to simulate requests from globally distributed locations to test their API endpoints. For each test, Seymour measures the availability, response time, and correctness of the API endpoint response. We built Seymour to help engineering teams bolster existing testing approaches and handle the challenges of monitoring their increasingly complex systems. It enables rapid detection of issues in production before users experience them. Seymour&aposs infrastructure is easily deployed on an AWS account with two CLI commands.
          </p>
          <br />
          <div className="grid grid-cols-2 gap-4 py-1 max-w-sm">
            <a href="https://seymour-active-monitoring.github.io/case-study.html">
              <p className="text-center py-1 rounded-lg bg-[#011e6f] text-[#ffffff] font-Lexend text-sm md:text-md cursor-pointer">Read the Case Study</p>
            </a>
            <a href="https://www.youtube.com/watch?v=vQGqlZumF8E">
              <p className="text-center py-1 rounded-lg bg-[#011e6f] text-[#ffffff] font-Lexend text-sm md:text-md cursor-pointer">Watch the Presentation</p>
            </a>
          </div>
        </div>
        <div className="w-full min-w-[300px] max-w-[600px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <a href="https://seymour-active-monitoring.github.io/">
            <Image src={seymourMap} className="rounded-xl" alt="seymour graphic" />
          </a>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Seymour;
