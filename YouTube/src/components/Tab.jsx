import React from 'react'

const Tab = ({content}) => {
  return (
    <div >
        <button className='px-3 py-1 rounded-lg bg-[#ececec] h-10 w-max text-center'>{content}</button>
    </div>
  )
}

export default Tab