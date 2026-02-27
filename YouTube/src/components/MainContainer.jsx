import React from 'react'
import TabList from './TabList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className=' h-full flex-1 overflow-y-auto'>
      <TabList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer