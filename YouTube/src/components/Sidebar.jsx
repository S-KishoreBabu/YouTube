import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiMusicNote } from "react-icons/pi";
import { PiFilmSlate } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { IoFlagOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import SideBarCard from './SideBarCard';

const Sidebar = () => {
  return (
    <div className='h-full w-60 px-2 py-5 bg-white '>
      <div className="SideCarCardWrapper border-b border-[#ccc] pb-2">
        <div className="list flex items-center rounded-md px-2 py-2 mt-1 bg-[#eeeeee]">
          <IoMdHome className = "text-2xl"/>
          <p className='text-md ml-5'>Home</p>
        </div>
        <SideBarCard img = {SiYoutubeshorts} name = "Shorts"/>
        <SideBarCard img = {MdOutlineSubscriptions} name = "Subcriptions"/>
        <SideBarCard img = {CgProfile} name = "You"/>
        <SideBarCard img = {GoHistory} name = "History"/>
      </div>
    <div className="SideCarCardWrapper border-b border-[#ccc] pb-2">
      <p className='px-3 py-4' >Explore</p>
      <SideBarCard img = {RiShoppingBag4Line} name = "Shopping"/>
      <SideBarCard img = {PiMusicNote} name = "Music"/>
      <SideBarCard img = {PiFilmSlate} name = "Films"/>
      <SideBarCard img = {IoIosArrowDown} name = "Show more"/>
    </div>
    <div className="SideCarCardWrapper border-b border-[#ccc] pb-2">
      <p className='px-3 py-4' >More from youTube</p>
      <div className="list flex items-center rounded-md px-2 py-2 mt-1">
        <FaYoutube className = "text-2xl text-red-600"/>
        <p className='text-md ml-5'>youtube premium</p>
      </div>
      {/* <SideBarCard img = {SiYoutubemusic} name = "youtube Music"/> */}
      <div className="list flex items-center rounded-md px-2 py-2 mt-1">
        <SiYoutubemusic className = "text-2xl text-red-600"/>
        <p className='text-md ml-5'>youtube Music</p>
      </div>
      {/* <SideBarCard img = {SiYoutubekids} name = "youtube Kids"/> */}
      <div className="list flex items-center rounded-md px-2 py-2 mt-1">
        <SiYoutubekids className = "text-2xl text-red-600"/>
        <p className='text-md ml-5'>youtube Kids</p>
      </div>
    </div>
      <SideBarCard img = {CiSettings} name = "Settings"/>
      <SideBarCard img = {IoFlagOutline} name = "Report History"/>
      <SideBarCard img = {IoIosHelpCircleOutline} name = "Help"/>
      <SideBarCard img = {MdOutlineFeedback} name = "Send feedback"/>
    </div>
  )
}

export default Sidebar