import React, { useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import {useState} from 'react'
import * as Tone from "tone"
import {Youtube_search_api} from '../utils/apiStore'
import SuggestionBox from './SuggestionBox';
import { CiSearch } from "react-icons/ci";

// const keyMap = {
//   a: "C4", b: "D4", c: "E4", d: "F4", e: "G4",
//   f: "A4", g: "B4", h: "C5", i: "D5", j: "E5",
//   k: "F5", l: "G5", m: "A5", n: "B5", o: "C6",
//   p: "D6", q: "E6", r: "F6", s: "G6", t: "A6",
//   u: "B6", v: "C7", w: "D7", x: "E7", y: "F7",
//   z: "G7",
// }
const SearchBar = () => {
  // const synth = new Tone.Synth().toDestination()

  // const handleKeyDown = async (e) => {
  //   await Tone.start()
  //   const note = keyMap[e.key.toLowerCase()]
  //   if (note) {
  //     synth.triggerAttackRelease(note, "10n")
  //   }
  // }

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(true);

  useEffect(()=>{
      
      const timer = setTimeout(()=>{
        getSearchSuggestion();
      },1000)
      return () => {
        clearTimeout(timer);// cleanup function 
      };
  },[searchQuery]);

  const getSearchSuggestion = async ()=>{
    console.log("Api called for ",searchQuery);
    const data = await fetch(Youtube_search_api+searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestion(json[1]);
  }


  return (
    <div className=' flex h-max items-center w-max gap-5'>
        <div className="searchBar h-max w-150 flex items-center border border-[#adadad] rounded-full">
            <input type="text" className=' h-10 rounded-l-full w-9/10 pl-5 border-r border-[#adadad] focus:outline-1  focus:outline-blue-700' placeholder='Search' value={searchQuery} onFocus={()=>{setShowSuggestion(true)}} onBlur={()=>{setShowSuggestion(false)}} onChange = {(e)=>{setSearchQuery(e.target.value)}}/>
            <button  className=' h-10 rounded-r-full w-1/10 hover:bg-[#ccc] pl-4'><IoMdSearch className='text-2xl'/></button>
        </div>
        <div className="Mic h-9 w-10"><FaMicrophone className='h-full' /></div>
        {/* <SuggestionBox suggestion = {suggestion}/> */}
        {(showSuggestion)?(
        <div className='h-max w-135 z-2 bg-white absolute top-13  shadow'> 
          <ul className='w-full h-max '>
            {/* <li className='text-2xl text-black'>{suggestion[0]}</li> */}
            {suggestion.map((word)=>
            (
              <li onClick={()=>{
                setSearchQuery(word); 
                }} 
                className='flex gap-3  items-center justify-start h-10 w-full hover:bg-[#eee] px-4 rounded-md'><CiSearch className='text-xl font-bold' />{ word}</li>
              ))}
          </ul>
        </div>):<div></div>}

    </div>
  )
}

export default SearchBar












//