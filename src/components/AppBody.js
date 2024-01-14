import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import SmallSideBar from './SmallSideBar'
import { useSelector } from 'react-redux'


export default function AppBody() {

  const darkmode = useSelector((store) => store.app.isdark);

  return (
    <div className={`flex ${darkmode ? `bg-slate-950`:`bg-white`}`}>
      <SideBar/>
      <SmallSideBar/>
      <div className='ml-2'>
      <MainContainer/>
      </div>
     
    </div>
  )
}
