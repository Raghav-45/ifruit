import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Notch } from '../components/notch'
import { Notifications } from '../components/notifications'

export default function Lockscreen() {
  const date = new Date();
  const CurrentTime = (date.getHours() % 12 || 12) + ':' + date.getMinutes();

  const DateToday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()] + ', ' + ["January","February","March","April","May","June","July","August","September","October","November","December"][date.getMonth()] + ' ' + date.getDate()

  return (<>
    <div className='mt-2 flex flex-col items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white">
        <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
      </svg>
      <p className='mt-3 text-white text-6xl font-extralight'>9:41</p>
      {/* <p className='mt-3 text-white text-6xl font-extralight'>{CurrentTime}</p> */}
      <p className='mt-1 text-white text-lg font-extralight'>Monday, June 7</p>
      {/* <p className='mt-1 text-white text-lg font-extralight'>{DateToday}</p> */}
    </div>

    <div class="relative mt-4 mx-2">
      <div class="absolute -bottom-4 scale-[0.85] origin-bottom inset-x-0 h-full w-full bg-white/10 backdrop-blur-md rounded-2xl"></div>
      <div class="absolute -bottom-2 scale-95 origin-bottom inset-x-0 h-full w-full bg-white/30 backdrop-blur-md rounded-3xl shadow-sm"></div>
      <div class="p-4 bg-white/40 backdrop-blur-md rounded-3xl shadow">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-xs font-bold">9:30 AM</p>
            <h2 class="text-lg font-bold">Your Morning Summary</h2>
          </div>
          <span class="bg-gray-500 h-8 w-8 rounded-full text-white flex items-center justify-center">11</span>
        </div>
        <div class="mt-2 grid grid-cols-2 gap-2">
          <div>
            <img class="rounded-lg h-24 w-full object-cover" src="https://images.unsplash.com/photo-1588974269162-4c0d5ccc6094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3302&q=80" alt="Surfer at sunset" />
            <h3 class="mt-2 text-xs font-bold leading-tight">Surfing: heals the soul, kills the ribs</h3>
            <p class="mt-1 text-xs">It's all fun and thrills until you get sucked over the falls.</p>
          </div>
          <div>
            <img class="rounded-lg h-24 w-full object-cover" src="https://media.bleacherreport.com/image/upload/v1625368217/ilertc3nqs53klcp9xvx.jpg" alt="CP3 vs the Greek Freak" />
            <h3 class="mt-2 text-xs font-bold leading-tight">The NBA Finals are here!</h3>
            <p class="mt-1 text-xs">Bucks vs Suns is shaping up to be a very intriguing series!</p>
          </div>
        </div>
        <hr class="mt-4 border-black/20" />
        <div class="mt-3 grid grid-cols-3 items-end">
          <div class="col-span-2">
            <h3 class="text-xs font-bold">More Updates</h3>
            <p class="mt-0.5 text-xs">Polywork, Keystone 6, and Sarah Drasner</p>
          </div>
          <ul class="flex -space-x-4 flex-row-reverse space-x-reverse">
            <li>
              <img class="h-8 w-8 rounded-xl object-cover" src="https://seeklogo.com/images/K/keystonejs-logo-C77FDB0662-seeklogo.com.png" alt="" />
            </li>
            <li>
              <img class="h-8 w-8 rounded-xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZUAlsS1loKxsx8abFEgwSi5KBus3tmsQaA&usqp=CAU" alt="" />
            </li>
            <li>
              <img class="h-8 w-8 rounded-xl object-cover" src="https://www.engmanagement.dev/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fsarah-drasner%402x.fa3f0a5d32f918fbe0918080d2767ad7.jpg&w=384&q=95" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>)
}
