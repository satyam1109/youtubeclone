import React from 'react'
import ContentButton from './ContentButton'
import { useSelector } from 'react-redux';


export default function ButtonList() {

  const darkmode = useSelector((store) => store.app.isdark);

  const ButtonType = ["All","Music","News","Akshay Saini","Java Script","React.js","Node.js","C++","DSA","Podcasts","Fitness","technology","Comedy","Clothing","Software Engineering","stocks","weight training"]
  return (
    <div className={`flex fixed ${darkmode ? `bg-slate-950` : `bg-white`} pb-4 pt-4 -mt-2`}>

      {
        ButtonType.map((item,index)=>(
          <ContentButton key={index} name={item}/>
        ))
      }

    </div>
  )
}
