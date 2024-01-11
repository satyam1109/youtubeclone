import React, { useState } from "react";
import moment from "moment";
import { FiThumbsUp } from "react-icons/fi";
import { LuThumbsDown } from "react-icons/lu";
import Reply from "./Reply";

export default function Comment({ data }) {
  const { snippet, replies } = data;

  const comments = replies?.comments;

  const commentinfo = snippet?.topLevelComment?.snippet;

  const [showReply, setShowReply] = useState(false);

  const handleReplies = () => {
    setShowReply(!showReply);
  };

  const {
    authorDisplayName,
    textDisplay,
    textOriginal,
    publishedAt,
    likeCount,
    authorProfileImageUrl,
  } = commentinfo;

  return (
    <div className="flex flex-row mt-4">
      <div className="mx-2">
        <img
          src={authorProfileImageUrl}
          className="rounded-full h-10 w-10 mt-4"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="text-xs font-semibold mr-4">
            {authorDisplayName}
          </span>
          <span className="text-xs">{moment(publishedAt).fromNow()}</span>
        </div>

        <div className="mt-1">
          <p className="text-xs">{textDisplay}</p>
        </div>

        <div className="flex flex-row mt-2">
          <span className="hover:bg-slate-200 hover:rounded-full cursor-pointer py-1">
            {<FiThumbsUp className="text-md mr-2" />}
          </span>
          <span className="mr-6 text-sm">
            {Intl.NumberFormat("en", { notation: "compact" }).format(likeCount)}
          </span>
          <span className="hover:bg-slate-200 hover:rounded-full cursor-pointer p-1">
            {<LuThumbsDown className="text-md mt-1" />}
          </span>
          <span className="text-sm font-semibold ml-12 cursor-pointer hover:bg-gray-200 hover:rounded-2xl px-2 py-1">
            Reply
          </span>
        </div>

        <div>
          {comments && comments.length > 0 && (
            <div>
              <span
                className="text-blue-700 text-sm font-semibold cursor-pointer hover:bg-blue-100 px-2 py-1 hover:rounded-xl"
                onClick={handleReplies}
              >
                {comments.length} Replies
              </span>

              {showReply && (
                <div>
                  {comments.map((item) => (
                    <Reply data={item.snippet} key={item.id} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
