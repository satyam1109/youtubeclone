import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Practise() {


  const id="nIE2uETUE8k";

  const [downloadLink,setDownloadLink] = useState("");

  const link = `https://youtube-dl.wave.video/info?url=https:%2F%2Fwww.youtube.com/watch?v=${id}`;

  useEffect(()=>{
    Download();
  },[])

  const Download = async()=>{
    const data = await fetch(link);
    const json = await data.json();

    setDownloadLink(json.formats[1].downloadUrl);

    // console.log(json.formats[1].downloadUrl);
    console.log(downloadLink);

  }

  const redirectToInstagram = () => {
    ;
    window.open(downloadLink);
  };

  return (
    // <div>

    //   <Link to="instagram.com"><button>Download</button></Link>
      
      
    // </div>

    <div>
      <p>Click the button to go to Instagram:</p>
      <button onClick={redirectToInstagram}>Download</button>
    </div>

  )
}
