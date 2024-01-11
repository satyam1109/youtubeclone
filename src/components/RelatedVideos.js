import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import RelatedVideoCard from "./RelatedVideoCard";

export default function RelatedVideos() {
  const [videos, setVideos] = useState([]);

  const apiKey = "AIzaSyCM-BtqrjbmqNMA8Jkepaj2L9Ybg8eBuYc";

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${apiKey}`);
    const json = await data.json();

    setVideos(json.items);
  };

  console.log(videos);

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
