import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import VideoCard2 from "./VideoCard2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Shimmer from "./Shimmer";
import InfiniteScroll from "react-infinite-scroll-component";
import { mainPageLoad } from "../redux/appSlice";
import { useSelector } from "react-redux";


export default function VideoContainer() {

  const categ = useSelector((store) => store.query.buttoncategory);

  const [videos, setVideos] = useState([]);
  const [categVideos,setcategVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [nextPageTokenCateg,setNextPageTokencateg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading,setIsLoading] = useState(true);

  const apiKey = "AIzaSyCM-BtqrjbmqNMA8Jkepaj2L9Ybg8eBuYc";
  const apiKey1 = "AIzaSyDUeoF1Ix1cBVb2OvvReWNkjZ2MKTF4aTM";

  const button_categ = useSelector((store) => store.query.buttoncategory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainPageLoad());
  });

  useEffect(() => {
    if (button_categ === "All") {
      setTimeout(() => {
        getVideos();
      }, 500);
    }
    else{
      getCategoryVideo();
    }
  }, [button_categ,currentPage]);

  useEffect(()=>{
    setcategVideos([]);
    setIsLoading(true);
  },[button_categ])


  const getVideos = async () => {

    setIsLoading(true);
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${apiKey}&pageToken=${nextPageToken}`
    );
    const json = await data.json();

    setVideos((prevVideos) => [...prevVideos, ...json.items]);

    if (json.nextPageToken) {
      setNextPageToken(json.nextPageToken);
    } else {
      setNextPageToken("");
    }
    setIsLoading(false);
  };

  const getCategoryVideo = async()=>{

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${button_categ}&order=viewCount&videoDuration=medium&key=${apiKey1}&maxResults=8&regionCode=IN&pageToken=${nextPageTokenCateg}`
      );

      const data = await response.json();

      console.log(data);

      setcategVideos((prevVideos)=>[...prevVideos,...data.items]);
      // setcategVideos(data.items);

      if(data.nextPageToken){
        setNextPageTokencateg(data.nextPageToken);
      }else{
        setNextPageTokencateg("");
      }
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
      return [];
    }
    setIsLoading(false);
  }

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  if (isLoading===true) {
    return <Shimmer />;
  }

  if(categ!=='All'){
    return (
      <div>
      <div className="mtflex flex-wrap mt-4">
    
        {categVideos.map((item, index) => (
          <div key={index}>
            <Link to={`/video/${item.id.videoId}`}>
              <VideoCard2 data={item} />
            </Link>
          </div>
        ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
        <hr className="w-full border-t-2 border-gray-300" />
          <button className="bg-gray-300 rounded-2xl border-gray-300 px-4 py-1 -mt-5 hover:bg-gray-400" onClick={getCategoryVideo}>Load More</button>
        </div>
    </div>
    )
  }

  

  return (
    <div className="flex flex-wrap mt-4">

      <InfiniteScroll
        dataLength={videos.length}
        next={handleLoadMore}
        hasMore={nextPageToken !== ""}
        loader={<Shimmer />}
        className="mt-4 flex flex-wrap"
      >
        {videos.map((item, index) => (
          <div key={index}>
            <Link to={`/video/${item.id}`}>
              <VideoCard data={item} />
            </Link>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
