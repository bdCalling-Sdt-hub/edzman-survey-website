import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/'
    }),
    endpoints: builder => ({
        getPost: builder.query({
            query: () => 'posts',
            providesTags: 'post'
        })
    })
})

export const { useGetPostQuery } = baseApi
export default baseApi