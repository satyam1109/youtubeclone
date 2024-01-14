import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import RelatedVideoCard from "./RelatedVideoCard";
import { apiKey1 } from "../utils/constants";
import { useSelector } from "react-redux";

export default function RelatedVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${apiKey1}`);
    const json = await data.json();

    setVideos(json.items);
  };


  return (
    <div>
      <div className="flex flex-col">
        {videos.map((item, index) => (
          <div key={item.id}>
            <Link to={`/video/${item.id}`}>
              <RelatedVideoCard data={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
