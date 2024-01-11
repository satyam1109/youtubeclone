import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

export default function VideoCard({ data }) {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = data;
  const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;
  const [channelIcon, setChannelIcon] = useState("");

  const apiKey="AIzaSyCM-BtqrjbmqNMA8Jkepaj2L9Ybg8eBuYc"

  useEffect(() => {
    get_channel_icon();
  }, []);

  const get_channel_icon = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
    );
    const data = await response.json();
    setChannelIcon(data?.items?.[0]?.snippet?.thumbnails?.default?.url);
  };

  let dynamicClass = null;

  if (menuOpen) {
    dynamicClass = "mx-2 my-2 w-80 md:w-64 lg:w-80";
  } else {
    dynamicClass = "mx-3 my-2 w-80 md:w-64 lg:w-68";
  }

  const videoRef = useRef(null);

  return (
    <div className={dynamicClass}>
      <div className="">
        <img src={snippet?.thumbnails?.medium?.url} className="rounded-lg" />
      </div>
      <div>
        <div className="flex flex-row">
          <div className=" mt-2 mr-4">
            <img src={channelIcon} className="rounded-full w-8 h-8"/>
          </div>
          <div>
            <h1 className="font-semibold text-xs md:text-sm lg:text-sm">
              {title.length > 50 ? title.slice(0, 50) + "..." : title}
            </h1>

            <p className="mt-1 text-xs">{channelTitle}</p>
            <div className="text-sm">
              <span className="mr-2 text-xs">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  statistics.viewCount
                )}
              </span>
              · <span  className="text-xs">{moment(publishedAt).fromNow()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
