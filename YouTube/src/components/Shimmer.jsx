import React from 'react'

const Shimmer = () => {
    const array = new Array(50).fill(0);
  return (
    <div className='w-full flex flex-wrap'>
        {array.map((obj)=>(<div className='m-1 h-90 w-1/3 bg-[#c2c2c2] rounded'><p className='text-[#eee]'>{obj}</p></div>))}
    </div>
  )
}

export default Shimmer