import React from 'react'

export default function Practise() {

  const videoIds=["0iAhG6sQ0no","P15UhjGsCac","5GxpVSSBQOQ"];

  const ids = videoIds.join(',');

  const apiKey="AIzaSyCAoTyFsV6yVWeyw-ct4UWfEmM4HZzrNYc";

  const getVideoData = async()=>{

    const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${apiKey}`);
    const json = await data.json();

    console.log(json.items);

  }


  return (
    <div>
      <button onClick={()=>getVideoData()}>GetConsole</button>
    </div>
  )
}
