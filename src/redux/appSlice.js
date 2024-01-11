import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isSmallMenuOpen:false,
    },

    reducers:{
        toggleSideBar: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
            state.isSmallMenuOpen= !state.isMenuOpen;
        },
        closeSideBar: (state)=>{
            state.isMenuOpen=false;
        },
        mainPageLoad : (state)=>{
            state.isMenuOpen=true;
            state.isSmallMenuOpen=false;
        }

    },
});


export const {toggleSideBar,closeSideBar,mainPageLoad} = appSlice.actions;
export default appSlice.reducer;