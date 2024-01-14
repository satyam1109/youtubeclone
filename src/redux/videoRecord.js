import { createSlice } from "@reduxjs/toolkit";

const videoRecord = createSlice({
    name : "videorecord",
    initialState : {
        history:[],
        watchLater:[],
    },
    reducers : {
        addToHistory : (state,action) =>{
            if(!state.history.includes(action.payload)){
                state.history.push(action.payload);
            }
        },
        addToWatchLater : (state,action) =>{
            if(!state.watchLater.includes(action.payload)){
                state.watchLater.push(action.payload);
            }
        },
    },
})

export const {addToHistory,addToWatchLater} = videoRecord.actions;
export default videoRecord.reducer;