import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Notch } from '../components/notch'
import { Notifications } from '../components/notifications'
import Frame from '../components/frame'

export default function Home() {
  const HomeData = {
    Apps: [
      {name: 'Maps', icon: '/assets/AppleMusic.png'},
      {name: 'Mail', icon: '/assets/AppleMusic.png'},
      {name: 'Calender', icon: '/assets/AppleMusic.png'},
      {name: 'Photos', icon: '/assets/AppleMusic.png'},
      {name: 'Camera', icon: '/assets/AppleMusic.png'},
      {name: 'Maps', icon: '/assets/AppleMusic.png'},
      {name: 'Clock', icon: '/assets/AppleMusic.png'},
      {name: 'Weather', icon: '/assets/AppleMusic.png'},
      {name: 'News', icon: '/assets/AppleMusic.png'},
      {name: 'Home', icon: '/assets/AppleMusic.png'},
      {name: 'Notes', icon: '/assets/AppleMusic.png'},
      {name: 'Stocks', icon: '/assets/AppleMusic.png'},
      {name: 'Reminders', icon: '/assets/AppleMusic.png'},
      {name: 'Videos', icon: '/assets/AppleMusic.png'},
      {name: 'AppStore', icon: '/assets/AppleMusic.png'},
      {name: 'iTunesStore', icon: '/assets/AppleMusic.png'},
      {name: 'iBooks', icon: '/assets/AppleMusic.png'},
      {name: 'Health', icon: '/assets/AppleMusic.png'},
      {name: 'Wallet', icon: '/assets/AppleMusic.png'},
      {name: 'Settings', icon: '/assets/AppleMusic.png'},
    ]
  }
  return (
    <div class="prevent-select px-[1.37rem] pt-[1.65rem] grid grid-cols-4 gap-[1.5rem] gap-y-3 backdrop-blur-[0.5px]">
      {HomeData.Apps.map((elem) => <div className='w-auto h-auto flex flex-col items-center justify-center'><div className='h-auto w-full rounded-[0.85rem] aspect-[1/1] bg-gray-400 overflow-hidden'><img src={elem.icon} className='h-full w-full' ></img></div><p className='text-white text-[0.62rem] font-light leading-5'>{elem.name}</p></div>)}
    </div>
  )
}
