import React from 'react'

const SideBarCard = (props) => {
    let {img : Image} = props;
    const displayProgress =()=>{
      window.alert("Still In Progress");
    }
  return (
    <div onClick={()=>displayProgress()} className="list flex items-center rounded-md px-2 py-2 mt-1 hover:bg-[#eeeeee] cursor-pointer " >
        <Image className = "text-2xl" />
        <p className='text-md ml-5'>{props.name}</p>
    </div>
  )
}

export default SideBarCard