import React from "react";
import { useSelector } from "react-redux";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import {MdOutlineSubscriptions,MdOutlineVideoLibrary} from "react-icons/md";


import {
  MdHomeFilled,
 
} from "react-icons/md";

export default function SmallSideBar() {
  const menuOpen = useSelector((store) => store.app.isSmallMenuOpen);
  const darkmode = useSelector((store) => store.app.isdark);

  return (
    menuOpen && (
      <div className={`${darkmode ? `bg-slate-950` : `bg-white`}`}>
        <div className="flex flex-col">

          <div className={`flex flex-col mx-auto mt-4 ${darkmode ? `text-white`:`text-black`}`}>
            <MdHomeFilled
             size="1.2rem" className="mx-auto" />
             <span className={`text-xs`}>Home</span>
          </div>

          <div className={`flex flex-col mx-auto mt-4 ${darkmode ? `text-white`:`text-black`}`}>
                <SiYoutubeshorts size="1.2rem" className="mx-auto"/>
                <span className="text-sm">Shorts</span>
          </div>

          <div className={`flex flex-col mx-auto mt-4 ${darkmode ? `text-white`:`text-black`}`}>
          <MdOutlineSubscriptions size="1.2rem" className="mx-auto" />
                <span className="text-sm">Suscriptions</span>
          </div>

          <div className={`flex flex-col mx-auto mt-4 ${darkmode ? `text-white`:`text-black`}`}>
          <MdOutlineVideoLibrary size="1.2rem" className="mx-auto"/>
                <span className="text-sm">Library</span>
          </div>

          <div className={`flex flex-col mx-auto mt-4 ${darkmode ? `text-white`:`text-black`}`}>
          <IoMdDownload size="1.2rem" className="mx-auto"/>
                <span className="text-sm">Downloads</span>
          </div>

          
          
          
        </div>
      </div>
    )
  );
}
