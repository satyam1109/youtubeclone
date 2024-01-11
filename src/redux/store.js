import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchquery from "./searchquery";

const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        query:searchquery,
    },
});

export default store;

