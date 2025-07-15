import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LayoutState {
    currentTab: string;
    showMobileSidebar: boolean;
}

const initialState: LayoutState = {
    currentTab: '',
    showMobileSidebar: false,
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setCurrentTab: (state, action:PayloadAction<string>) => {
            state.currentTab = action.payload;
        },
        setShowMobileSidebar: (state, action:PayloadAction<boolean>) => {
            state.showMobileSidebar = action.payload;
        }
    }
})

export const {setCurrentTab, setShowMobileSidebar} = layoutSlice.actions;
export default layoutSlice.reducer;



