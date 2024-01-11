import React, { useEffect } from "react";
import SideBar from "./SideBar";
// import { useParams } from "react-router-dom";

export default function WatchVideo({videoId}) {

  return (
    <>
      <div className="">

        <div className="">
        <iframe
          className="rounded-lg z-0"
          width="915"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ backgroundColor: 'transparent' }}
        ></iframe>
        </div>

        
      </div>
    </>
  );
}
