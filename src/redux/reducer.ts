import {combineReducers, UnknownAction} from "@reduxjs/toolkit";
import layoutReducer from "@/redux/slice/layoutSlice";
import {authApi} from "@/service/auth";

const appReducers = combineReducers({
    layout:layoutReducer,
    [authApi.reducerPath]: authApi.reducer,
})

// const rootReducer = (
//     state: ReturnType<typeof appReducer> | undefined,
//     action: UnknownAction
// ) => {
//     if (action.type === 'RESET_STATE') {
//         return appReducer(undefined, action);
//     }
//     return appReducer(state, action);
// };

// export default appReducers;

const appReducer = (
    state: ReturnType<typeof appReducers> | undefined,
    action: UnknownAction
) => {
    if (action.type === 'RESET_STATE') {
        return appReducers(undefined, action);
    }
    return appReducers(state, action);
};

export default appReducer;

export const resetAllState = () => ({
    type: 'RESET_STATE' as const
});
