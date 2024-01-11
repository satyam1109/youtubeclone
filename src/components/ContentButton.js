import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { setButtonCategory } from '../redux/searchquery';



export default function ContentButton({name}) {

  const categ = useSelector((store) => store.query.buttoncategory);

  const dispatch = useDispatch();

  const handleButtonClick = ()=>{
    dispatch(setButtonCategory(name));
  }

  return (
    <div>
      
    <button className={`${categ===name ? 'bg-gray-400' : 'bg-gray-200'} rounded-lg px-3 py-1 mx-2 hover:bg-gray-300`} onClick={handleButtonClick}><p className='text-sm font-semibold'>{name}</p></button>
    </div>
  )
}
