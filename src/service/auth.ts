import {createApi} from '@reduxjs/toolkit/query/react'
import {customFetchBaseQuery} from "@/service/customFetchBaseQuery";


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