import React from "react";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdOutlineContentCut,
  MdOutlineKeyboardArrowDown,
  MdOutlineMusicNote,
  MdOutlineLightbulb,
  MdHelpOutline,
  MdOutlineSettings,
  MdOutlinedFlag,
  MdOutlineFeedback,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";




import { RiVideoLine, RiShoppingBag2Line } from "react-icons/ri";
import { ImFire } from "react-icons/im";
import { GiClapperboard, GiAerialSignal } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline, IoTrophyOutline } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { BsPlusCircle } from "react-icons/bs";
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { TbMoodKid } from "react-icons/tb";
import { ImDisplay } from "react-icons/im";
import { AiOutlineLike } from "react-icons/ai";

import { useSelector } from "react-redux";

export default function SideBar() {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  const darkmode = useSelector((store) => store.app.isdark);

  return (
    menuOpen && (
      <div className={`left-0 h-full z-50 ${darkmode ? `bg-slate-950`:`bg-white`}`}>
        <div className={`w-40 left-0  top-0`}>
          <div className="">
            <div className="h-screen max-h-full overflow-y-scroll scrollbar-w-2">

              <Link to="/">
              <div className={`home px-4 flex py-2 items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`} w-full rounded-lg  cursor-pointer`}>
                <MdHomeFilled size="1.2rem" className="mr-4" />
                <span className="text-sm">Home</span>
              </div>
              </Link>
              <div className={`shorts px-4  flex py-2 items-center w-full rounded-lg cursor-pointer ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}`}>
              <SiYoutubeshorts size="1.2rem" className="mr-4"/>
                <span className="text-sm">Shorts</span>
              </div>
              <div className={`subscriptions py-2 px-4  flex items-center w-full rounded-lg cursor-pointer ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}`}>
                <MdOutlineSubscriptions size="1.2rem" className="mr-4" />
                <span className="text-sm">Subscriptions</span>
              </div>
              <div className={`pt-3 border-b border-zinc-200 w-full ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}`}></div>
              <div className={`library py-2 mt-4 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdOutlineVideoLibrary
                  size="1.2rem"
                  className="mb-1 mr-4 ml-1"
                />
                <span className="text-sm">Library</span>
              </div>
              <Link to="/history">
                <div className={`History py-2 px-4 flex items-center   w-full rounded-lg  cursor-pointer ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}`}>
                  <MdOutlineHistory size="1.2rem" className="mb-1 mr-4" />
                  <span className="text-sm">History</span>
                </div>
              </Link>

              <Link to="/watchlater">
              <div className={`Watch-Later py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdOutlineWatchLater size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Watch Later</span>
              </div>
              </Link>
              <div className={`Your-Videos py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <RiVideoLine size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Your videos</span>
              </div>

              <div className={`Your-Clips py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdOutlineContentCut size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Your Clips</span>
              </div>
              <div className={`Your-Clips py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <AiOutlineLike size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Liked Videos</span>
              </div>
              <div className={`Show-more py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdOutlineKeyboardArrowDown
                  size="1.5rem"
                  className="mb-1 mr-4"
                />
                <span className="text-sm">Show more</span>
              </div>

              <div className="pt-3 border-b border-zinc-200 w-full"></div>
              <div className={`pt-4 pl-4 mb-2 ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}`}>
                <span className="text-base">Explore</span>
              </div>
              <div className={`Trending py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <ImFire size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Trending</span>
              </div>
              <div className={`Shopping py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <RiShoppingBag2Line size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Shopping</span>
              </div>
              <div className={`Music py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdOutlineMusicNote size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Music</span>
              </div>
              <div className={`Movies py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <GiClapperboard size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Movies</span>
              </div>
              <div className={`Live py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <GiAerialSignal size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Live</span>
              </div>
              <div className={`Gaming py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <SiYoutubegaming size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Gaming</span>
              </div>
              <div className={`News py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <IoNewspaperOutline size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">News</span>
              </div>
              <div className={`Sports py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <IoTrophyOutline size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Sports</span>
              </div>
              <div className={`Learning py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdOutlineLightbulb size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Learning</span>
              </div>
              <div className={`Fashion-Beauty py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <GiHanger size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Fashion & Beauty</span>
              </div>
              <div className="pt-3 border-b border-zinc-200 w-full mb-3"></div>
              <div className={`Browse-channels py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <BsPlusCircle size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Browse channels</span>
              </div>
              <div className="pt-3 border-b border-zinc-200 w-full "></div>
              <div className={`pt-4 pl-4 mb-2 ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}`}>
                <span className="text-sm font-semibold">More from Streamy</span>
              </div>
              <div className={`Streamy-Premium py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <FaYoutube size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Streamy Premium</span>
              </div>
              <div className={`Streamy-music py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <SiYoutubemusic size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm ">Streamy Music</span>
              </div>
              <div className={`Streamy-kids py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <TbMoodKid size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Streamy kids</span>
              </div>
              <div className={`Streamy-TV py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <ImDisplay size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Streamy TV</span>
              </div>
              <div className="pt-3 border-b border-zinc-200 w-full mb-2 "></div>
              <div className={`Settings py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}   w-full rounded-lg  cursor-pointer`}>
                <MdOutlineSettings size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Settings</span>
              </div>
              <div className={`report-history py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdOutlinedFlag size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Report history</span>
              </div>
              <div className={`Help py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdHelpOutline size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Help</span>
              </div>
              <div className={`Send-feedback py-2 px-4 flex items-center ${darkmode ? `hover:bg-zinc-700 text-white` : `hover:bg-zinc-100`}  w-full rounded-lg  cursor-pointer`}>
                <MdOutlineFeedback size="1.2rem" className="mb-1 mr-4" />
                <span className="text-sm">Send feedback</span>
              </div>
              <div className="pt-3 border-b border-zinc-200 w-full mb-2 "></div>
              <div className="links1 py-2 px-4  flex gap-1 flex-wrap font-medium text-[0.84rem] text-[#606060] dark:text-zinc-400">
                <div className="cursor-pointer ml-1">About</div>
                <div className="cursor-pointer ml-1">Press</div>
                <div className="cursor-pointer">Copyright</div>
                <div className="cursor-pointer ml-1">Contact us</div>
                <div className="cursor-pointer ml-1">Creators</div>
                <div className="cursor-pointer ml-1">Advertise</div>
                <div className="cursor-pointer ml-1">Developers</div>
              </div>
              <div className="links1 py-2 px-4  flex gap-1 flex-wrap font-medium text-[0.84rem] text-[#606060] dark:text-zinc-400">
                <div className="cursor-pointer ml-1">Terms</div>
                <div className="cursor-pointer ml-1">Privacy</div>
                <div className="cursor-pointer ml-1">Policy & Safety</div>
                <div className="cursor-pointer ml-1">How Streamy works</div>
                <div className="cursor-pointer ml-1">Test new features</div>
              </div>
              <div className="px-4 py-2 text-gray-400">
                {" "}
                &copy; 2023 Google LLC
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
