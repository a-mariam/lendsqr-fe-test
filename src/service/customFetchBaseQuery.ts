
import { fetchBaseQuery } from '@reduxjs/toolkit/query';




const baseUrl = process.env.BASE_URL;


export const customFetchBaseQuery = fetchBaseQuery({
    baseUrl,
    // mode: 'no-cors',
    fetchFn: typeof window === 'undefined'
        ? (fetch as unknown as typeof globalThis.fetch)
        : undefined,
    prepareHeaders:  (headers,{ endpoint }) => {
        const token = sessionStorage.getItem("access_token")
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
            headers.set('Content-Type', 'application/json');
        }
        return headers;
    },
});