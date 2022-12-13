import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Notch } from '../components/notch'
import { Notifications } from '../components/notifications'
import Frame from '../components/frame'

export default function Home() {
  const HomeData = {
    Apps: [
      {name: 'Maps', icon: 'https://www.apple.com/v/maps/d/images/overview/intro_icon__dfyvjc1ohbcm_large.png'},
      {name: 'Mail', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png'},
      {name: 'Calender', icon: 'https://icon-library.com/images/iphone-calendar-icon/iphone-calendar-icon-21.jpg'},
      {name: 'Photos', icon: 'https://www.macworld.com/wp-content/uploads/2022/08/photos-app-icon-1.png'},
      {name: 'Camera', icon: 'https://www.freeiconspng.com/uploads/scout-icon-13.png'},
      {name: 'Maps', icon: 'https://www.apple.com/v/maps/d/images/overview/intro_icon__dfyvjc1ohbcm_large.png'},
      {name: 'Clock', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Apple_Clock_icon.svg/2048px-Apple_Clock_icon.svg.png'},
      {name: 'Weather', icon: 'https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png'},
      {name: 'News', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Apple_News_icon_%28iOS%29.png'},
      {name: 'Home', icon: '/assets/AppleMusic.png'},
      {name: 'Notes', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Apple_Notes_%28iOS%29.png'},
      {name: 'Stocks', icon: 'https://cdn.jim-nielsen.com/ios/512/stocks-2018-04-25.png'},
      {name: 'Reminders', icon: 'https://cdn.jim-nielsen.com/ios/512/reminders-2022-09-26.png'},
      {name: 'Videos', icon: 'https://cdn.jim-nielsen.com/ios/512/videos-2018-04-25.png'},
      {name: 'AppStore', icon: 'https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-png-logo--1.png'},
      {name: 'iTunesStore', icon: 'https://cdn.jim-nielsen.com/ios/512/itunes-store-2017-09-26.png'},
      {name: 'iBooks', icon: 'https://w7.pngwing.com/pngs/469/374/png-transparent-ibooks-computer-icons-desktop-ios-7-book-miscellaneous-blue-angle-thumbnail.png'},
      {name: 'Health', icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/built_in/ios9-health-app-icon.png'},
      {name: 'Wallet', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Wallet_%28iOS%29.png'},
      {name: 'Settings', icon: 'https://external-preview.redd.it/su6kPQpCxuQ82YBY0kFOnLbzmPAr2_tlvM9llje_tjA.jpg?auto=webp&s=1942f8c1e1c41a96df2f946e2c621dcf6355ee1b'},
    ]
  }
  return (
    <div class="prevent-select px-[1.37rem] pt-[1.65rem] grid grid-cols-4 gap-[1.5rem] gap-y-3 backdrop-blur-[0.5px]">
      {HomeData.Apps.map((elem) => <div className='w-auto h-auto flex flex-col items-center justify-center'><div className='h-auto w-full rounded-[0.85rem] aspect-[1/1] bg-gray-400 overflow-hidden'><img src={elem.icon} className='h-full w-full' ></img></div><p className='text-white text-[0.62rem] font-light leading-5'>{elem.name}</p></div>)}
    </div>
  )
}
