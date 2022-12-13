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
      {name: 'Mail', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png'},
      {name: 'Calender', icon: 'https://icon-library.com/images/iphone-calendar-icon/iphone-calendar-icon-21.jpg'},
      {name: 'Photos', icon: '/assets/AppleMusic.png'},
      {name: 'Camera', icon: '/assets/AppleMusic.png'},
      {name: 'Maps', icon: '/assets/AppleMusic.png'},
      {name: 'Clock', icon: '/assets/AppleMusic.png'},
      {name: 'Weather', icon: 'https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png'},
      {name: 'News', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Apple_News_icon_%28iOS%29.png'},
      {name: 'Home', icon: '/assets/AppleMusic.png'},
      {name: 'Notes', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Apple_Notes_%28iOS%29.png'},
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
