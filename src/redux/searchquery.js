import { createSlice } from "@reduxjs/toolkit";

const searchQuery = createSlice({
    name: "query",
    initialState :{
        searchquery:"music",
        buttoncategory:"All",
    },
    reducers : {
        setInputData:(state,action)=>{
            state.searchquery = action.payload;
        },
        setButtonCategory:(state,action)=>{
            state.buttoncategory = action.payload;
        }
    },
});

export const {setInputData,setButtonCategory} = searchQuery.actions;
export default searchQuery.reducer;