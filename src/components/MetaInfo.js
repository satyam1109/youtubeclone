import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import { apiKey1 } from "../utils/constants";
import { addToWatchLater } from "../redux/videoRecord";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { FiThumbsUp } from "react-icons/fi";
import { LuThumbsDown } from "react-icons/lu";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineSaveAs } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";
import Comments from "./Comments";

export default function MetaInfo({ videoId }) {

  const dispatch = useDispatch();
  const darkmode = useSelector((store) => store.app.isdark);

  const addToWatchLaterfun = ()=>{
    dispatch(addToWatchLater(videoId));
  }

  const [title, setTitle] = useState("");
  const [channel, setChannel] = useState("");
  const [stat, setstat] = useState({});
  const [descp, setDescp] = useState("");
  const [icon, setIcon] = useState("");
  const [date,setdate] = useState("") 
  const [showButton, setShowButton] = useState("Show More");
  const [channelId,setChannelId] = useState("");

  const [description,setDescription] = useState("");

  useEffect(() => {
    getMetaInfo();
  }, [videoId]);

  useEffect(()=>{
    get_channel_icon();
  },[channelId]);



  const getMetaInfo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey1}`
    );
    const json = await data.json();

    setTitle(json?.items[0]?.snippet?.title);
    setdate(json?.items[0]?.snippet?.publishedAt)
    setChannel(json?.items[0]?.snippet?.channelTitle);
    setstat(json?.items[0]?.statistics);
    setDescp(json?.items[0]?.snippet?.localized?.description);
    setChannelId(json?.items[0]?.snippet?.channelId);
    
  };

  useEffect(()=>{
    if (descp.length > 100) {
      setDescription(descp.slice(0, 100) + "...");
    } else {
      setDescription(descp);
    }
  },[descp])

  const toggleShowButton = () => {
    if (showButton === "Show More") {
      setDescription(descp);
      setShowButton("Show Less");
    } else {
      setDescription(descp.slice(0, 100) + " ...");
      setShowButton("Show More");
    }
  };

  const get_channel_icon = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey1}`
    );
    const data = await response.json();
    setIcon(data?.items?.[0]?.snippet?.thumbnails?.default?.url);
  };



  return (
    <>
    <div className={`my-4 w-400 h-auto ${darkmode ? `text-white`:`text-black`}`}>
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
      </div>

      <div className="flex flex-row justify-between my-3">
        <div className={`flex flex-row`}>
          <div className="w-14 h-18">
            <img src={icon} className="rounded-full w-full" />
          </div>
          <div className="fle flex-col mx-2">
            <p className="font-bold text-md">{channel}</p>
            <p className="text-sm">Suscribers</p>
          </div>
          <div className="py-1 px-3 rounded-3xl bg-black text-white my-1 mx-2 cursor-pointer h-8">
            <p className="text-sm py-auto">Subscribe</p>
          </div>
        </div>

        <div className="flex flex-row h-8 mt-1">
          <div className={`flex flex-row ${darkmode ? `bg-zinc-600 text-white` : `bg-zinc-200`} p-1 rounded-3xl mx-1 cursor-pointer`}>
            <FiThumbsUp className="w-4 h-5 mx-1 mt-1" />
            <span className="mx-1 tex-sm">
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                stat?.likeCount
              )}{" "}
              |
            </span>

            <LuThumbsDown className="w-4 h-5 mx-2  mt-1 cursor-pointer" />
          </div>

          <div className={`flex flex-row ${darkmode ? `bg-zinc-600` : `bg-zinc-200`} p-1 rounded-3xl mx-1 cursor-pointer`}>
            <PiShareFat className="w-5 h-5 mx-1" />
            <span className="mr-1"><p className="text-sm">Share</p></span>
          </div>

          <div className={`flex flex-row ${darkmode ? `bg-zinc-600` : `bg-zinc-200`} p-1 rounded-3xl cursor-pointer `} onClick={addToWatchLaterfun}>
            <HiOutlineSaveAs className="w-5 h-5 mx-2" />
            <span className="mr-1"><p className="text-sm">Watch Later</p></span>
          </div>

          <div className={`flex flex-row ${darkmode ? `bg-zinc-600` : `bg-zinc-200`} p-1 rounded-3xl mx-1 cursor-pointer`}>
            <HiDotsHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className={`${darkmode ? `bg-slate-900`:`bg-gray-100`} mt-8 rounded-md`}>

        <div className="flex flex-row font-bold">
          <div>
          <span className="mx-2">
            {Intl.NumberFormat("en", { notation: "compact" }).format(stat.viewCount)}{" "}views
          </span>
          </div>
          <div className="ml-8">
          {moment(date).fromNow()}
          </div>

        </div>

          <div className="desc whitespace-pre-wrap break-words mt-4 overflow-hidden">
              {description}
              {descp.length > 100 && (
                <button className="font-bold block" onClick={toggleShowButton}>
                  {showButton}
                </button>
              )}
            </div>

        </div>
    </div>

    <Comments videoId={videoId} commentCount={stat?.commentCount}/>
    </>
  );
}
