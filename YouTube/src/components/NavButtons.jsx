import React from 'react'
import { MdNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const NavButtons = () => {
  return (
    <div className='navButtons flex justify-between items-center w-30'>
        <div className="notification">
            <MdNotificationsActive className='text-3xl'/>
        </div>
        <div className="profile">
            <CgProfile className='text-3xl' />
        </div>
    </div>
  )
}

export default NavButtons