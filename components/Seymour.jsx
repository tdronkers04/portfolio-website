/* eslint-disable max-len */
import Image from 'next/image';
import React from 'react';
import seymourLogo from '../public/assets/seymour_text.png';
import seymourResults from '../public/assets/seymour_test_results.png';
import seymourArchitecture from '../public/assets/seymour_architecture.png';
import seymourDeploy from '../public/assets/seymour_deploy.gif';

function Seymour() {
  return (
    <div id="seymour" className="w-full px-4 mt-12 md:mt-4">
      <div id="seymour-section-1" className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8 items-center">
        <div className="col-span-1 p-2">
          <div id="seymour-logo" className="image-container md:max-w-[400px]">
            <a href="https://seymour-active-monitoring.github.io/" target="_blank" rel="noopener noreferrer">
              <Image alt="seymour logo" src={seymourLogo} placeholder="blur" />
            </a>
          </div>
          <h2 className="py-4 text-gray-700 text-xl md:text-xl">Active Monitoring for API endpoints</h2>
          <p>
            {'Seymour is an open-source and easy-to-configure active monitoring solution that allows users to simulate requests from globally distributed locations to test their API endpoints. For each test, Seymour measures the availability, response time, and correctness of the API endpoint response. Seymour was built to help engineering teams bolster existing testing approaches and handle the challenges of monitoring their increasingly complex systems. It enables rapid detection of issues in production before users experience them. Seymour\'s infrastructure is easily deployed on an AWS account with two CLI commands.'}
          </p>
          <br />
        </div>
        <div className="col-span-2 p-2">
          <div id="mock-ui-container" className="p-4 shadow-xl shadow-gray-400 rounded-xl">
            <a href="https://seymour-active-monitoring.github.io/" target="_blank" rel="noopener noreferrer">
              <Image src={seymourResults} className="rounded-xl" alt="mock seymour user interface" placeholder="blur" />
            </a>
          </div>
        </div>
        <div />
      </div>
      <div id="seymour-section-2" className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8 items-center">
        <div className="col-span-2 p-2">
          <div id="architecture-container" className="p-4 shadow-xl shadow-gray-400 rounded-xl">
            <a href="https://seymour-active-monitoring.github.io/" target="_blank" rel="noopener noreferrer">
              <Image src={seymourArchitecture} className="rounded-xl" alt="seymour architecture diagram" placeholder="blur" />
            </a>
          </div>
        </div>
        <div className="col-span-1 p-2">
          <div id="deploy-container">
            <a href="https://seymour-active-monitoring.github.io/" target="_blank" rel="noopener noreferrer">
              <Image src={seymourDeploy} className="rounded-xl" alt="seymour deployment demo" />
            </a>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-2 py-4 max-w-sm">
            <a href="https://seymour-active-monitoring.github.io/case-study.html" target="_blank" rel="noopener noreferrer">
              <p className="text-center py-1 rounded-lg bg-gray-500 hover:bg-[#011e6f] text-[#ffffff] font-Lexend text-sm md:text-md cursor-pointer">Read the Case Study</p>
            </a>
            <a href="https://www.youtube.com/watch?v=vQGqlZumF8E" target="_blank" rel="noopener noreferrer">
              <p className="text-center py-1 rounded-lg bg-gray-500 hover:bg-[#011e6f] text-[#ffffff] font-Lexend text-sm md:text-md cursor-pointer">Watch the Presentation</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seymour;
