import {createApi} from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import {customFetchBaseQuery} from "@/service/customFetchBaseQuery";

const baseUrl = process.env.APP_DEV_AUTH_URL;

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: customFetchBaseQuery,
    endpoints: (builder) => ({

        login: builder.mutation({
            query:(data:{username: string, password: string}) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            }),
        }),


    })
})

export const {useLoginMutation} = authApi;