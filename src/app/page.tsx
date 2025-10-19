import React from 'react'
import Video from 'next-video';
import myVideo from '/videos/background-video-horses.mov'; 

const Home = () => {
  return (
    <>
      <Video 
        src={myVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className='w-full h-full object-cover'
        />
        <div>Home</div>
      
    </>
  )
}

export default Home
