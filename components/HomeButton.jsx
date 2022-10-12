import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

function HomeButton() {
  return (
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
  );
}

export default HomeButton;
