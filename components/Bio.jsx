/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Bio() {
  return (
    <div id="about-me" className="w-full px-4 mt-12 md:mt-4">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="border-t border-gray-700 py-12 text-gray-700 flex justify-center text-xl md:text-2xl">A bit more about me</h2>
        <div className="w-full text-center">
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl shadow-gray-400 overflow-hidden md:max-w-6xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img className="h-52 w-full object-cover md:h-full md:w-80" src="/assets/boys.webp" alt="tim and boys" />
                </div>
                <div className="p-8">
                  <p className="mt-2 text-gray-700">
                    I was born and raised in the San Francisco Bay Area but have called Colorado
                    home since 2013. I&#39;m a husband and father of two boys. When I&#39;m not
                    coding or chasing my kids around, you can often find me outdoors, hopefully
                    riding a snowboard 🏂 or bike 🚴‍♂️. Although when the 49ers are playing, I&#39;m
                    probably yelling at my TV 😅. If you enjoy Hunter S. Thompson&#39;s writing
                    I bet we would be fast friends!
                  </p>
                  <br />
                  <p className="mt-2 text-gray-700">
                    I started my professional life as an accountant but found my
                    {' '}
                    <a className="font-bold text-[#011e6f] cursor-pointer" href="https://www.dronkers.dev/blog/buy-the-ticket-take-the-ride" target="_blank" rel="noopener noreferrer">calling</a>
                    {' '}
                    in software development.
                    Nothing energizes me more than building things that people find useful.
                    I care deeply about the end-user and get inspired by any opportunity to
                    make the user experince or workflow better, if only incrementally.
                    I&#39;m at my best when tackling big, hairy problems alongside colleagues.
                    When time permits, I love exploring and tinkering with new technologies!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Bio;
