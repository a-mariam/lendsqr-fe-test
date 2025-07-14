import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LayoutState {
    currentTab: string;
}

const initialState: LayoutState = {
    currentTab: 'home',
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setCurrentTab: (state, action:PayloadAction<string>) => {
            state.currentTab = action.payload;
        }
    }
})

export const {setCurrentTab} = layoutSlice.actions;
export default layoutSlice.reducer;



