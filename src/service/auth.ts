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
        getAllUsers: builder.query({
            query: (data:{limit: number | string, search ? : string }) => ({
                url:`/users${data.search ? `/search?q=${data.search}` : `?limit=${data.limit}`} `,
                method:'GET'
            })
        }),
        getUser: builder.query({
            query: (id: number | string ) => ({
                url:`/users/${id}`,
                method:'GET'
            })
        })


    })
})

export const {useLoginMutation, useGetAllUsersQuery, useGetUserQuery} = authApi;