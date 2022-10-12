import Image from 'next/image';
import React from 'react';
import gameAlertImg from '../../public/assets/projects/game_alert.png';
import jsIcon from '../../public/assets/tech/js.png';
import nodeIcon from '../../public/assets/tech/nodejs.png';
import psqlIcon from '../../public/assets/tech/psql.png';

function GameAlert() {
  return (
    <div id="game-alert" className="relative flex flex-items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-[#333333] to-[#666666]">
      <Image className="rounded-xl group-hover:opacity-10" src={gameAlertImg} alt="game alert screenshot" placeholder="blur" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg md:text-2xl text-white -tracking-wider text-center">Game Alert</h3>
        <p className="hidden md:flex pb-4 pt-2 text-sm text-white text-center">A full-stack application that provides custom notifications for sporting events. Built with Node, Express and PostgreSQL on the backend. Features include email and SMS notifications, authentication, flash messaging and session persistence via cookies.</p>
        <p className="md:hidden py-2 text-sm text-white text-center">A full-stack application that provides custom notifications for sporting events.</p>
        <div className="grid grid-cols-3 gap-1 place-items-center pb-1">
          <div className="image-container max-w-[35px]">
            <Image src={jsIcon} alt="javascript" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={nodeIcon} alt="node.js" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={psqlIcon} alt="postgresql" layout="responsive" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameAlert;
