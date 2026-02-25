import React from 'react'

const SideBarCard = (props) => {
    let {img : Image} = props
  return (
    <div className="list flex items-center rounded-md px-2 py-2 mt-1 ">
        <Image className = "text-2xl" />
        <p className='text-md ml-5'>{props.name}</p>
    </div>
  )
}

export default SideBarCard