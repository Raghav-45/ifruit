import React from 'react'

export const LibraryFolder = (props) => {
  return (
    <div className='w-auto h-full flex flex-col items-center justify-center'>
      <div className='h-auto w-full rounded-2xl aspect-[1/1] bg-white/30 backdrop-blur-lg overflow-hidden'>
        {/* <img src={props.icon} className='h-full w-full'></img> */}
      </div>
      <p className='text-white text-[0.62rem] font-light leading-5'>{props.name}</p>
    </div>
  )
}
