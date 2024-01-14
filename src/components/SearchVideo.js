import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Shimmer from "./Shimmer";
import { apiKey3 } from "../utils/constants";

export default function SearchVideo() {
  const [videos, setvideos] = useState([]);

  const query = useSelector((store) => store.query.searchquery);
  const darkmode = useSelector((store) => store.app.isdark);

  useEffect(() => {
    getSearchResults();
  }, [query]);

  const getSearchResults = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&order=viewCount&videoDuration=medium&key=${apiKey3}&maxResults=30`
      );

      const data = await response.json();

      setvideos(data.items);
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
      return [];
    }
  };

  if(videos.length===0){
    return(
        <Shimmer/>

    )
  }

  return (
    <div className={`flex flex-row ${darkmode ? `bg-slate-950`:`bg-white`}`}>
        <div>
        <SideBar/>
        </div>
      <div className={`mx-auto w-8/12`}>
        {videos.map((item) => (
          <div key={item.id.videoId}>
            <Link to={`/video/${item.id.videoId}`}>
              <SearchCard data={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
