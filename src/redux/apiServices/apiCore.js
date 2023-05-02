import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiCore = createApi({
    reducerPath:"ProuductApi",
    
    baseQuery: fetchBaseQuery({baseUrl:"https://api.pujakaitem.com/api/"}),

    endpoints: (builder) => ({
        getproducts: builder.query({
            query: () => `products`
        }),

        getsingleproduct : builder.query({
            query: (id) => `products?id=${id}`
        })

    })
})

export const {useGetproductsQuery} = apiCore;
export const {useGetsingleproductQuery} = apiCore;