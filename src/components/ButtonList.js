import React from 'react'
import ContentButton from './ContentButton'


export default function ButtonList() {

  

  const ButtonType = ["All","Music","News","Java Script","React.js","Node.js","Podcasts","Fitness","Comedy","Clothing","Software Engineering"]
  return (
    <div className='flex'>

      {
        ButtonType.map((item,index)=>(
          <ContentButton key={index} name={item}/>
        ))
      }

    </div>
  )
}
