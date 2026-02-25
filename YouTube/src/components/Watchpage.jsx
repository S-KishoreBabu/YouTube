import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Watchpage = () => {
    const [vidId] = useSearchParams();

  return (
    <div>
        <iframe 
        width="760" 
        height="315" 
        src={"https://www.youtube.com/embed/"+vidId.get('v')+"?si=MXm3seCALrfR_nm8"} 
        title="This is Kishore Babu youtube clone" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
    </div>
  )
}

export default Watchpage