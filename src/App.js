import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import AppBody from "./components/AppBody";
import store from "./redux/store";
import WatchPage from "./components/WatchPage"

import { Provider } from "react-redux";
import { Route,Routes } from "react-router-dom";
import Practise from "./components/Practise";
import SearchVideo from "./components/SearchVideo";
import History from "./components/History";
import WatchLater from "./components/WatchLater";

function App() {
  return (
    // <Provider store={store}>
    // <Practise/>
    // </Provider>

    // <SideBar/>
  
    <Provider store={store}>
      <div className="App">
        <div className="">
          <NavBar />
          <div className="">
            <Routes className="">
              <Route path="/" element={<AppBody />}/>
              <Route path="/video/:videoId" element={<WatchPage/>}/>
              <Route path="/search/:query" element={<SearchVideo/>} />
              <Route path="/history" element={<History/>}/> 
              <Route path="/watchlater" element={<WatchLater/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
