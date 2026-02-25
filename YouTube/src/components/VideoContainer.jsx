import React, { useEffect, useState } from 'react'
import {Youtube_api} from '../utils/apiStore'
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
    useEffect(()=>{
        getVideos();
    },[])
    const [videoData,setVideoData] = useState([]);
    const getVideos = async () =>{
        const data = await fetch(Youtube_api);
        const json = await data.json();
        console.log(json);
        setVideoData(json.items);
        console.log(videoData);
    }

  return (
    <div className='w-full flex flex-wrap'>
        {videoData.map((data)=><Link className='p-2 h-90 w-1/3' to={"/watch?v="+data.id}><VideoCards key={data.id} data = {data}/></Link>)}
        
    </div>
  )
}

export default VideoContainer