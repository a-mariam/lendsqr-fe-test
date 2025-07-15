import {combineReducers} from "@reduxjs/toolkit";
import layoutReducer from "@/redux/slice/layoutSlice";

const appReducer = combineReducers({
    layout:layoutReducer,
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

export default appReducer;

// export const resetAllState = () => ({
//     type: 'RESET_STATE' as const
// });
