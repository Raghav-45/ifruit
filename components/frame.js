import React from 'react'
import { Notch } from './notch'
import { Notifications } from './notifications'
import { useRouter } from 'next/router'

export default function Frame({children}) {
  const router = useRouter()
  const isLockscreen = router.asPath === '/Lockscreen'
  return (
    <div className='prevent-select grid min-h-screen bg-purple-50 place-items-center'>
      <div className='relative h-[712px] w-[350px] bg-black rounded-[55px] border-[14px] border-black overflow-hidden ring ring-purple-400 shadow-xl'>
        <img className='absolute inset-0 h-full w-full object-cover' src="/assets/peakpx.jpg" alt="" />
        <Notch />
        <div className='relative'>
          <Notifications />
          {isLockscreen && <div className='mt-1.5 h-0.5 w-10 bg-white mr-7 ml-auto rounded'></div>}
          {children}
        </div>
        {isLockscreen && <div class="absolute bottom-0 inset-x-0 h-20">
          <div class="px-10 flex justify-between">
            <button class="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </button>
            <button class="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div class="absolute bottom-1 inset-x-0">
            <div class="mx-auto h-1 w-28 rounded bg-white"></div>
          </div>
        </div>}
        
        {!isLockscreen && <div className='prevent-select absolute bottom-0 w-full h-[4.8rem] mb-[0.6rem] px-[0.6rem]'>
          <div class="grid grid-cols-4 gap-[1.5rem] p-[12px] bg-gray-500/40 backdrop-blur-sm rounded-[1.8rem]">
            {/* <div className='w-auto h-auto'><div className='flex flex-col items-center justify-center'><img className='h-full w-full' src="/assets/AppleMusic.png" alt="AppIcon" /></div></div> */}
            <div className='w-auto h-auto flex flex-col items-center justify-center'><div className='h-auto w-full rounded-[0.85rem] aspect-[1/1] bg-gray-400 overflow-hidden'><img src='https://icon-library.com/images/call-icon-android/call-icon-android-21.jpg' className='h-full w-full' ></img></div></div>
            <div className='w-auto h-auto flex flex-col items-center justify-center'><div className='h-auto w-full rounded-[0.85rem] aspect-[1/1] bg-gray-400 overflow-hidden'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Vu8NXJMf1sHItuLPkTaJrllfKTP6GPUd21dhi8PCrr-ByprT1atEtfhkxvGU3tfWq24&usqp=CAU' className='h-full w-full' ></img></div></div>
            <div className='w-auto h-auto flex flex-col items-center justify-center'><div className='h-auto w-full rounded-[0.85rem] aspect-[1/1] bg-gray-400 overflow-hidden'><img src='https://images.macrumors.com/t/xhjvyZvcvdWDIi846TArb8MFzzk=/1600x/article-new/2020/07/messagesicon-200x200.png' className='h-full w-full' ></img></div></div>
            <div className='w-auto h-auto flex flex-col items-center justify-center'><div className='h-auto w-full rounded-[0.85rem] aspect-[1/1] bg-gray-400 overflow-hidden'><img src='/assets/AppleMusic.png' className='h-full w-full' ></img></div></div>
          </div>
        </div>}
      </div>
    </div>
  )
}
