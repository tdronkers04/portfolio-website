import React from "react"
import Image from "next/image"
import Link from "next/link"
import Navlogo from '../public/assets/hard-hat.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        {/* <Image src={Navlogo} alt="/" width='100' height='100'/>  */}
        <div>
          <ul className="hidden md:flex">
            <Link href='/'>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href='/'>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href='/'>
              <li className="ml-10 text-sm uppercase hover:border-b">Blog</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar