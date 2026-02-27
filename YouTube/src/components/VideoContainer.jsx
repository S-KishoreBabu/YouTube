import React, { useEffect, useState } from 'react'
import {Youtube_api} from '../utils/apiStore'
import VideoCards, {AdVideoCards} from './VideoCards';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
const VideoContainer = () => {
    useEffect(()=>{
        getVideos();
    },[])
    const [videoData,setVideoData] = useState([]);
    const getVideos = async () =>{
        const data = await fetch(Youtube_api);
        const json = await data.json();
        setVideoData(json.items);
    }

    if(videoData.length == 0){
        return (<Shimmer/>);
    }
  return (

    <div className='w-full flex flex-wrap'>
        {/* {videoData[0] && <Link key={videoData[0].id} className='p-2 h-90 w-1/3'  to={"/watch?v="+videoData[0].id} ><AdVideoCards key={videoData[0].id} data = {videoData[0]} /></Link>} */}
        {videoData.map((data)=><Link key={data.id} className='p-2 h-90 w-1/3' to={"/watch?v="+data.id}><VideoCards key={data.id} data = {data}/></Link>)}        
    </div>
  )
}

export default VideoContainer