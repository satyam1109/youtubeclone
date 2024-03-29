import React ,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import moment from "moment";
import { apiKey1 } from "../utils/constants";

export default function VideoCard2({data}) {


    const menuOpen = useSelector((store) => store.app.isMenuOpen);
    const darkmode = useSelector((store) => store.app.isdark);

    const {snippet} = data;

    const {publishedAt,channelId,title,thumbnails,channelTitle} = snippet;
    const [channelIcon, setChannelIcon] = useState("");

    let dynamicClass = null;

    if (menuOpen) {
      dynamicClass = "mx-2 my-2 w-80 md:w-64 lg:w-80";
    } else {
      dynamicClass = "mx-3 my-2 w-80 md:w-64 lg:w-68";
    }

    useEffect(() => {
        get_channel_icon();
    }, []);

    const get_channel_icon = async () => {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey1}`
        );
        const data = await response.json();
        setChannelIcon(data?.items?.[0]?.snippet?.thumbnails?.default?.url);
    };

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
            <h1 className={`font-semibold text-xs md:text-sm lg:text-sm ${darkmode ? `text-white`:`text-black`}`}>
              {title.length > 50 ? title.slice(0, 50) + "..." : title}
            </h1>

            <p className={`mt-1 text-xs ${darkmode ? `text-white`:`text-black`}`}>{channelTitle}</p>
            <div className="text-sm">
              ·<span className={`text-xs ${darkmode ? `text-white`:`text-black`}`}>{moment(publishedAt).fromNow()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
