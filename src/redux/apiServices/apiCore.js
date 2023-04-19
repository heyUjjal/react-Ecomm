import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiCore = createApi({
    reducerPath:"ProuductApi",
    
    baseQuery: fetchBaseQuery({baseUrl:"https://api.pujakaitem.com/api/"}),

    endpoints: (builder) => ({
        getproducts: builder.query({
            query: () => `products`
        })

    })
})

export const {useGetproductsQuery} = apiCore;