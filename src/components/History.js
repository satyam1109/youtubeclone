import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiKey3 } from "../utils/constants";
import VideoCard from "./VideoCard";
import SideBar from "./SideBar";
import SmallSideBar from "./SmallSideBar";

export default function History() {
  const videoIds = useSelector((store) => store.videorecord.history);
  const darkmode = useSelector((store) => store.app.isdark);
  const ids = videoIds.join(",");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${apiKey3}`
    );
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    <div className={`flex ${darkmode ? `bg-slate-950` : `bg-white`}`}>
      <SideBar />
      <SmallSideBar />

      <div className="flex flex-col">
        <h1
          className={` mx-4 py-4 text-3xl font-bold ${
            darkmode ? `text-white` : `text-black`
          }`}
        >
          History
        </h1>

        <div className={`flex flex-wrap ml-2`}>
          {videos.map((item, index) => (
            <div key={index}>
              <Link to={`/video/${item.id}`}>
                <VideoCard data={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
