import React from 'react'
import Tab from './Tab'
import { Carousel } from 'flowbite-react';
const TabList = () => {
  return (
    <div className="w-full bg-white px-7 py-2">
      <div className="flex gap-3 overflow-x-auto">
        <Tab content = "Music" />
        <Tab content = "Mixes" />
        <Tab content = "Tamil Cinima" />
        <Tab content = "News" />
        <Tab content = "Music Arrangements" />
        <Tab content = "Thalapathy Vijay" />
        <Tab content = "Albums" />
        {/* <Tab content = "Live" />
        <Tab content = "Gaming" />
        <Tab content = "TVK" />
        <Tab content = "Anirudh Ravichander" />
        <Tab content = "Music" /> */}
        </div>
    </div>
  )
}

export default TabList