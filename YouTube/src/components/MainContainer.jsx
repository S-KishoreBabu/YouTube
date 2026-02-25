import React from 'react'
import TabList from './TabList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className=' h-full w-full '>
      <TabList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer