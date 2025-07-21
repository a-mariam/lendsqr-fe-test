import { configureStore } from '@reduxjs/toolkit';
import appReducer from "@/redux/reducer";
import {persistReducer, persistStore} from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage/session';
import { authApi } from '@/service/auth';
import {setupListeners} from "@reduxjs/toolkit/query";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, appReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
    }).concat([
        authApi.middleware,
    ]),

})

export const persistor = persistStore(store);
setupListeners(store.dispatch);


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;