import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
  reducerPath: "fakeStoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Products", "Auth"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getFeaturedProducts: builder.query({
      query: () => "/products?limit=3",
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: (_result, _error, productId) => [
        { type: "Products", id: productId },
      ],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useGetFeaturedProductsQuery,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useLoginMutation,
} = fakeStoreApi;
