import React, { useState } from 'react'

export default function Practise2({getColor}) {

    const [text,setText] = useState("")

  return (
    <div>
      <input
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />

      <button onClick={()=>getColor(text)}>Send Color</button>
    </div>
  )
}
