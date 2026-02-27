import React from 'react'

const SuggestionBox = ({suggestion}) => {
  console.log("->>>",suggestion)
  return (
    <div className='h-100 w-135 z-2 bg-amber-300 absolute top-13 '> 
    <ul className='w-full h-full bg-white'>
      <li className='text-2xl text-black'>{suggestion[0]}</li>
      {/* {suggestion.map((word)=>
      (
        <li className='text-white text-2xl'>{word}</li>
        ))} */}
    </ul>
    </div>
  )
}

export default SuggestionBox