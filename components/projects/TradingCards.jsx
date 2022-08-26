import Image from 'next/image';
import React from 'react';
import tradingCardsImg from '../../public/assets/projects/trading_cards.png';
import jsIcon from '../../public/assets/tech/js.png';
import htmlIcon from '../../public/assets/tech/html.png';
import cssIcon from '../../public/assets/tech/css.png';

function TradingCards() {
  return (
    <div id="game-alert" className="relative flex flex-items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#333333] to-[#666666]">
      <Image className="rounded-xl group-hover:opacity-10" src={tradingCardsImg} alt="trading cards denver nuggets" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg md:text-2xl text-white -tracking-wider text-center">Trading Cards</h3>
        <p className="hidden md:flex pb-4 pt-2 text-sm text-white text-center">An front-end app I used reinforce my understanding of responsive design and basic javascript.</p>
        <p className="md:hidden pb-4 pt-2 text-sm text-white text-center">A front-end app built with vanilla javascript</p>
        <div className="grid grid-cols-3 gap-1 place-items-center py-1">
          <div className="image-container max-w-[35px]">
            <Image src={htmlIcon} alt="html" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={cssIcon} alt="css" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={jsIcon} alt="javascript" layout="responsive" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingCards;
