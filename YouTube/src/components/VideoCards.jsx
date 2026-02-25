import React from 'react'

const VideoCards = ({data}) => {
    const {snippet,statistics} = data;
    const {channelTitle, title, thumbnails} = snippet;
    console.log("url->>>",thumbnails.medium.url);
    let imageUrl = `https://i.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
    return (
    <div className=' w-full h-full'> 
        <img src={imageUrl} className='w-full h-6/10 rounded' alt="thumbnail" />
        
        <div className="VideoInfo flex items-center h-4/10">
            <div className="ytLogo h-full w-1/6 "></div>
            <div className="description w-5/6">
                <div className="tittle"><p>{title}</p></div>
                <div className="channelName"><p className='text-[#747474]'>{channelTitle}</p></div>
                <div className="views"><p className='text-[#747474]' >{Number(statistics.viewCount).toLocaleString()} views</p></div>
            </div>
        </div>
    </div>
    )
}

export default VideoCards  