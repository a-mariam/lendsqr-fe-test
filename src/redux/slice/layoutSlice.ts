import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserDataType = {
    userEmail: string;
    userID: string;
    useName: string;
    firstName: string;
    lastName: string;
    image:string;
    gender: string;
}

interface LayoutState {
    currentTab: string;
    showMobileSidebar: boolean;
    userData: UserDataType;

}

const initialState: LayoutState = {
    currentTab: 'Users',
    showMobileSidebar: false,
    userData : {
        userEmail: '',
        userID: '',
        useName: '',
        firstName: '',
        lastName: '',
        image:'',
        gender: '',
    }
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
        },
        setUserData: (state, action:PayloadAction<UserDataType>) => {
            state.userData = action.payload;
        }
    }
})

export const {setCurrentTab, setShowMobileSidebar, setUserData} = layoutSlice.actions;
export default layoutSlice.reducer;



