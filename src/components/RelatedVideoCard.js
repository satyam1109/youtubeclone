import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

export default function RelatedVideoCard({ data }) {
  const { snippet, statistics } = data;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const darkmode = useSelector((store) => store.app.isdark);

  return (
    <div>
      <div className="flex flex-row mb-4 mx-4">

        <div className="w-4/12">
          <img src={snippet?.thumbnails?.medium?.url} className="rounded-lg"/>
        </div>

        <div className={`flex flex-col w-8/12 mx-2 ${darkmode ? `text-white`:`text-black`}`}>
          <p className="text-sm font-semibold">{title.length > 50 ? title.slice(0, 50) + "..." : title}</p>
          <p className={`text-xs  ${darkmode ? `text-gray-300`:`text-gray-600`}`}>{channelTitle}</p>
          <div className={`flex flex-row text-xs my-1 ${darkmode ? `text-gray-300`:`text-gray-600`}`}>
            <span className="mr-2">
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                statistics?.viewCount
              )}
            </span>{" "}
            <span>{moment(publishedAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
