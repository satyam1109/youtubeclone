import React from 'react'
import ContentButton from './ContentButton'


export default function ButtonList() {

  

  const ButtonType = ["All","Music","News","Java Script","React.js","Node.js","C++","DSA","Podcasts","Fitness","Comedy","Clothing","Software Engineering"]
  return (
    <div className='flex fixed bg-white z-10 pb-4 pt-2'>

      {
        ButtonType.map((item,index)=>(
          <ContentButton key={index} name={item}/>
        ))
      }

    </div>
  )
}
