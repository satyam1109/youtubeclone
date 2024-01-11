import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Shimmer from "./Shimmer";

export default function SearchVideo() {
  const [videos, setvideos] = useState([]);

  const query = useSelector((store) => store.query.searchquery);
  const apiKey = "AIzaSyDUeoF1Ix1cBVb2OvvReWNkjZ2MKTF4aTM";

  useEffect(() => {
    getSearchResults();
  }, [query]);

  const getSearchResults = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&order=viewCount&videoDuration=medium&key=${apiKey}&maxResults=30`
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
    <div className="flex flex-row">
        <div>
        <SideBar/>
        </div>
      <div className="mx-auto w-8/12">
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
