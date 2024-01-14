import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux/appSlice";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { addToCache } from "../redux/searchSlice";
import { setInputData } from "../redux/searchquery";
import { useNavigate } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { setVoiceInputTrue } from "../redux/searchquery";
import { toggleDarkMode } from "../redux/appSlice";
import VoiceInput from "./VoiceInput";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const cacheData = useSelector((store) => store.search);
  const darkmode = useSelector((store) => store.app.isdark);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheData[searchText]) {
        setSuggestions(cacheData[searchText]);
      } else {
        getSugestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSugestions = async () => {
    const data = await fetch(
      `https://clients1.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`
    );
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      addToCache({
        [searchText]: json[1],
      })
    );
  };

  const toggelMenuHandeler = () => {
    dispatch(toggleSideBar());
  };

  const handleinputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSuggestionClick = (text) => {
    dispatch(setInputData(text));
    navigate(`/search/${encodeURIComponent(text)}`);
    setSuggestions([]);
    setSearchText("");
  };

  const handleSearchClick = () => {
    dispatch(setInputData(searchText));
    setSuggestions([]);
    setSearchText("");
  };

  return (
    <div
      className={`sticky top-0 left-0 ${
        darkmode ? `bg-black` : `bg-white`
      }  overflow-hidden z-10`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex mx-2">
          <GiHamburgerMenu
            className={`w-8 h-6 mt-3 cursor-pointer ${
              darkmode ? `text-white` : `text-black`
            }`}
            size="1rem"
            onClick={() => toggelMenuHandeler()}
          />

          <Link to="/">
            {!darkmode ? (
              <img
                src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
                className="w-20 mx-2"
              />
            ) : (
              <img
                src="https://9to5mac.com/wp-content/uploads/sites/6/2017/08/youtube_logo_dark.jpg?quality=82&strip=all"
                className="w-24"
              />
            )}
          </Link>
        </div>

        <div className="w-1/3">
          <div className="flex p-2 w-full">
            <VoiceInput className="z-10 left-1" />
            <input
              type="text"
              className="border border-gray-400 pl-4 py-1 focus:outline-none rounded-l-full h-8 w-full"
              placeholder="Search"
              value={searchText}
              onChange={handleinputChange}
            />
            <button
              className="bg-gray-100 border border-gray-400 px-2 py-1 rounded-r-full h-8 w-16"
              onClick={handleSearchClick}
            >
              <IoSearchOutline className="text-lg mx-auto" />
            </button>

            <FaMicrophone
              className="ml-6 text-3xl bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300"
              onClick={() => dispatch(setVoiceInputTrue())}
            />

          
          </div>
          <div>
            {suggestions && suggestions.length > 0 && (
              <div className="shadow-xl fixed z-10 bg-white text-black rounded-lg w-96 border border-gray-100   ">
                {suggestions.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 flex p-1"
                    onClick={() => handleSuggestionClick(item)}
                  >
                    <span className="mx-4">
                      <IoSearchOutline className="text-sm mt-1" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>


        <div className="flex">

        <button onClick={() => dispatch(toggleDarkMode())}>
              {darkmode ? <p>Light</p> : <p>Dark</p>}
        </button>

          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            className="w-8 h-8 ml-4 rounded-full mt-2 mr-4"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
}
