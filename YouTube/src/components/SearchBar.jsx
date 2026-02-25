import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className=' flex h-max items-center w-max gap-5'>
        <div className="searchBar h-max w-150 flex items-center border border-[#adadad] rounded-full">
            <input type="text" className=' h-10 rounded-l-full w-9/10 pl-5 border-r border-[#adadad] focus:outline-1  focus:outline-blue-700' placeholder='Search' />
            <button  className=' h-10 rounded-r-full w-1/10 hover:bg-[#ccc] pl-4'><IoMdSearch className='text-2xl'/></button>
        </div>
        <div className="Mic h-9 w-10"><FaMicrophone className='h-full' /></div>
    </div>
  )
}

export default SearchBar