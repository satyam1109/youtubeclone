import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import SmallSideBar from './SmallSideBar'


export default function AppBody() {
  return (
    <div className='flex'>
      <SideBar/>
      <SmallSideBar/>
      <div className='ml-2'>
      <MainContainer/>
      </div>
     
    </div>
  )
}
