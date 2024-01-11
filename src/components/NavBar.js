import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux" ;
import {toggleSideBar} from "../redux/appSlice"
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { addToCache } from "../redux/searchSlice";
import { setInputData } from "../redux/searchquery";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [suggestions,setSuggestions] = useState([]);

  const cacheData = useSelector((store) => store.search);

  useEffect(()=>{
    const timer = setTimeout(()=>{

      if(cacheData[searchText]){
        setSuggestions(cacheData[searchText]);
      }
      else{
        getSugestions()
      }
    },300);

    return ()=>{
      clearTimeout(timer);
    }
  },[searchText]);

  const getSugestions=async()=>{
    const data = await fetch(`https://clients1.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(addToCache({
      [searchText]:json[1],
    }))

  }

  

  const toggelMenuHandeler=()=>{
    dispatch(toggleSideBar());     
  }

  const handleinputChange = (e)=>{
    setSearchText(e.target.value);
    
  }

  const handleSuggestionClick=(text)=>{
    dispatch(setInputData(text));
    navigate(`/search/${encodeURIComponent(text)}`);
    setSuggestions([]);
    setSearchText("");
  }

  const handleSearchClick = ()=>{
    dispatch(setInputData(searchText));
    setSuggestions([]);
    setSearchText("");
  }
  

  return (
    <div className="sticky top-0 left-0 bg-white overflow-hidden z-10">
    <div className="flex flex-row items-center justify-between">

      <div className="flex mx-2">

        <img src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        className="w-10 h-8 mt-2 cursor-pointer" 
        onClick={()=>toggelMenuHandeler()}
        />

        <Link to="/">
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          className="w-20 mx-2"
        />
        </Link>
      </div>

      <div className="w-96">
      <div className="flex p-2 w-full">
        
            <input
              type="text"
              className="border border-gray-400 pl-4 py-1 focus:outline-none rounded-l-full h-8 w-full"
              placeholder="Search"
              value = {searchText}
              onChange={handleinputChange}
            />
            <button className="bg-gray-100 border border-gray-400 px-2 py-1 rounded-r-full h-8" onClick={handleSearchClick}>
            <IoSearchOutline className="text-lg"/>
            </button>

      </div>
      <div>
        {
          suggestions && suggestions.length > 0 && (

            <div className="shadow-xl fixed z-10 bg-white text-black rounded-lg w-96 border border-gray-100   ">
              {
                suggestions.map((item,index)=>(

                  <div key={index} className="cursor-pointer hover:bg-gray-200 flex p-1" onClick={()=>handleSuggestionClick(item)}>
                    <span className="mx-4">
                    <IoSearchOutline className="text-sm mt-1"/>
                    </span>
                    <span>{item}</span>
                  </div>
                ))
              }
            </div>

          )
        }
      </div>
      </div>

      <div className="flex">
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            className="w-8 h-8 ml-4 rounded-full mt-2"
            alt="User Avatar"
          />
        </div>
    </div>
    </div>
  );
}
