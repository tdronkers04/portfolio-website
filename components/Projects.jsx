import React from 'react';
import Trellific from './projects/Trellific';
import GameAlert from './projects/GameAlert';

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-4 text-gray-700 text-xl md:text-2xl">Other Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Trellific />
          <GameAlert />
        </div>
      </div>
    </div>
  );
}

export default Projects;
