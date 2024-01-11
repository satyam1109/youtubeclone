import React from "react";
import moment from "moment";

export default function RelatedVideoCard({ data }) {
  const { snippet, statistics } = data;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;

  return (
    <div>
      <div className="flex flex-row mb-4 mx-4">

        <div className="w-4/12">
          <img src={snippet?.thumbnails?.medium?.url} className="rounded-lg"/>
        </div>

        <div className="flex flex-col w-8/12 mx-2">
          <p className="text-sm font-semibold">{title.length > 50 ? title.slice(0, 50) + "..." : title}</p>
          <p className="text-xs text-gray-600">{channelTitle}</p>
          <div className="flex flex-row text-xs text-gray-600 my-1">
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
