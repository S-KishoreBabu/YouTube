import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const SideBarMini = () => {
  return (
    <div className='h-full w-20 bg-white'>
        <div className="miniCard flex flex-col py-3 font-light  justify-center items-center">
            <IoMdHome className='text-3xl'/>
            <p className='text-center text-[11px]' >Home</p>
        </div>
        <div className="miniCard flex flex-col py-3 justify-center items-center">
            <SiYoutubeshorts className='text-3xl'/>
            <p className='text-center text-[11px]' >Home</p>
        </div>
        <div className="miniCard flex flex-col py-3 justify-center font-light items-center">
            <MdOutlineSubscriptions className='text-3xl'/>
            <p className='text-center text-[11px]' >Home</p>
        </div>
        <div className="miniCard flex flex-col py-3 justify-center items-center">    
            <CgProfile className='text-3xl'/>
            <p className='text-center text-[11px]' >Home</p>
        </div>
    </div>
  )
}

export default SideBarMini