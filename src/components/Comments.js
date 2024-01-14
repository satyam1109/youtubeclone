import React, { useEffect, useState } from "react";
import { MdOutlineSort } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import Comment from "./Comment";
import { apiKey } from "../utils/constants";
import { useSelector } from "react-redux";

export default function Comments({ videoId, commentCount }) {

  const [info, setinfo] = useState([]);
  const [maxResults,setMaxResults]=useState(10);
  const darkmode = useSelector((store) => store.app.isdark);

  useEffect(() => {
    getComments();
  }, [maxResults]);

  const getComments = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&key=${apiKey}&videoId=${videoId}&maxResults=${maxResults}`
    );
    const json = await data.json();

    setinfo(json?.items);
  };

  const MoreComments=()=>{
    setMaxResults(maxResults+10);
  }

  return (
    <div className={`mt-4 ${darkmode ? `text-white`:`text-black`}`}>
      <div className="flex flex-row">
        <span className="text-lg font-semibold">{commentCount} Comments</span>
        <MdOutlineSort className="text-2xl ml-8" />
        <span className="font-semibold ml-2">Sort by</span>
      </div>

      <div className="flex flex-row mt-4">
        <FaCircleUser className="text-5xl mr-4" />
        <input
          type="text"
          className={`border-b border-gray-500 focus:outline-none focus:border-blue-500 w-full mb-4 ${darkmode ? `bg-slate-900`:`bg-gray-50`}`}
          placeholder="Add a Comment"
        />
      </div>
      <div className="flex justify-end mt-[-10px]"> 
        <button className="hover:bg-gray-300 rounded-2xl text-md font-semibold px-2 py-1 mx-2">Cancel</button>
        <button className="bg-gray-300 rounded-2xl text-md font-semibold px-2 py-1 mx-2 text-gray-600">Comments</button>
      </div>

      {
        !info.length>0 ? <p>Loading...</p> 
        : 
        <div>
          {
            info.map((item)=>(
              <Comment data={item} key={item.id}/>
            ))
          }
        </div>
      }
      <button onClick={MoreComments} className="bg-red-400 rounded-xl px-2 py-1 mt-4 text-white">Show More</button>
    </div>
  );
}
