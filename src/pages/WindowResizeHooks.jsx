import useWindowresize from '@/helper/windowResize'
import React from 'react'

const WindowResizeHooks = () => {

    const [width, height]=useWindowresize();
   
  return (
  <>
     <div className='items-center justify-center flex flex-col space-y-6'>
     <h1 className='text-gray-300 text-xl'>Print window Resize</h1>
   
    <div className='text-white text-3xl'>height : <span>{height}</span>, Width : <span>{width}</span></div>
    </div>
  </>
  )
}

export default WindowResizeHooks