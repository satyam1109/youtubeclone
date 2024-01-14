import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SideBar from "./SideBar";
import WatchVideo from "./WatchVideo";
import MetaInfo from "./MetaInfo";
import { closeSideBar } from "../redux/appSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import { addToHistory } from "../redux/videoRecord";

export default function WatchPage() {

  const { videoId } = useParams();

  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  const darkmode = useSelector((store) => store.app.isdark);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeSideBar());
  },[])
  
  useEffect(() => { 
    dispatch(addToHistory(videoId));
  }, [videoId]);

  return (
    <div className="relative">
      {menuOpen && (
        <div className="fixed left-0 w-40 h-90 z-50 side">
          <SideBar />
        </div>
      )}
      <div className={menuOpen ? "dark-transparent-background" : ""}></div>

      <div className={`pt-2 flex w-screen ${darkmode ? 'bg-slate-950':`bg-white`}`}>
        <div className="flex flex-col ml-24 w-3/5">
          <WatchVideo videoId={videoId}/>
          <MetaInfo videoId={videoId} className="-ml-4"/>

        </div>

        <div>
          <RelatedVideos/>
        </div>
      </div>
    </div>
  );
}
