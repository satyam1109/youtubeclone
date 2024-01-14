import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchquery from "./searchquery";
import videoRecord from "./videoRecord";

const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        query:searchquery,
        videorecord:videoRecord,
    },
});

export default store;

