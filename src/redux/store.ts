import { configureStore } from '@reduxjs/toolkit';
import appReducer from "@/redux/reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, appReducer);


export const store = configureStore({
    reducer: persistedReducer,

})

// export const persistor = persistStore(store);


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];