import { createSlice } from "@reduxjs/toolkit";

const searchQuery = createSlice({
    name: "query",
    initialState :{
        searchquery:"music",
        buttoncategory:"All",
        voiceActive:false,
    },
    reducers : {
        setInputData:(state,action)=>{
            state.searchquery = action.payload;
        },
        setButtonCategory:(state,action)=>{
            state.buttoncategory = action.payload;
        },
        setVoiceInputTrue:(state)=>{
            state.voiceActive=true;
        },
        setVoiceActiveFalse:(state) =>{
            state.voiceActive=false;
        },
    },
});

export const {setInputData,setButtonCategory,setVoiceInputTrue,setVoiceActiveFalse} = searchQuery.actions;
export default searchQuery.reducer;