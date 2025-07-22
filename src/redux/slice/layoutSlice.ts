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
    searchTerm: string;
    selectedUserId: string;

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
    },
    searchTerm: '',
    selectedUserId: '',
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
        },
        setSearchTerm: (state, action:PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        setSelectedUserId: (state, action:PayloadAction<string>) => {
            state.selectedUserId = action.payload;
        }
    }
})

export const {setCurrentTab, setShowMobileSidebar, setSelectedUserId,setUserData,setSearchTerm} = layoutSlice.actions;
export default layoutSlice.reducer;



