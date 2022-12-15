import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';


import { Notch } from '../components/notch'
import { Notifications } from '../components/notifications'
import Frame from '../components/frame'
import { AppShortcut } from '../components/AppShortcut';
import { LibraryFolder } from '../components/LibraryFolders';

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
      {name: 'Shortcuts', icon: 'https://2672686a4cf38e8c2458-2712e00ea34e3076747650c92426bbb5.ssl.cf1.rackcdn.com/2018-10-15-00-44-52.png'},
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

  const [scrollValue, setScrollValue] = useState(0)

  // useEffect(() => {
  //   // document.getElementById("Screen3").scrollIntoView()
  //   if (scrollValue>24 && scrollValue<26) {
  //     console.log('2')
  //     document.getElementById("Screen2").scrollIntoView()
  //   } else if (scrollValue>49 && scrollValue<51) {
  //     console.log('3')
  //     document.getElementById("Screen3").scrollIntoView()
  //   } else if (scrollValue>74 && scrollValue<76) {
  //     console.log('4')
  //     document.getElementById("Screen4").scrollIntoView()
  //   }
  // }, [scrollValue])
  
  return (
    <div id='myDIV' onScroll={(e) => {setScrollValue((e.target.scrollLeft/e.target.scrollWidth)*100)}} className="relative overflow-x-scroll pb-10 hide-scroll-bar h-[570px] w-full">
      <div className='absolute grid grid-cols-3 gap-[0px] h-full w-[300%]'>
        <div id='Screen1' className='h-full w-full'>
          <div className="prevent-select pt-[1.65rem] px-[1.37rem] grid grid-cols-4 gap-[1.5rem] gap-y-3 backdrop-blur-[0px]">
            {HomeData.Apps.map((elem) => <AppShortcut icon={elem.icon} name={elem.name}/>)}
          </div>
        </div>
        <div id='Screen2' className='h-full w-full'>
          <div className="prevent-select pt-[1.65rem] px-[1.37rem] grid grid-cols-4 gap-[1.5rem] gap-y-3 backdrop-blur-[0px]">
            {HomeData.Apps.map((elem) => <AppShortcut icon={elem.icon} name={elem.name}/>)}
          </div>
        </div>
        <div id='Screen2' className='h-full w-full'>
          <div className='h-10 w-full px-[1.37rem] my-[1.65rem]'>
            <div className='h-full w-full bg-white/30 backdrop-blur-lg rounded-xl'><p className='flex items-center justify-center h-full w-full text-white font-light'>App Library</p></div>
          </div>
          <div className="prevent-select px-[1.37rem] grid grid-cols-2 gap-[1.5rem] gap-y-3">
            <LibraryFolder name='Suggestions' />
            <LibraryFolder name='Recently Added' />
            <LibraryFolder name='Social' />
            <LibraryFolder name='Entertainment' />  
          </div>
        </div>
      </div>
    </div>
  )
}
