import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartOfUser: builder.query({
      query: () => ({
        url: "get-cart",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    addCourseToCart: builder.mutation({
      query: (data) => ({
        url: "add-course",
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    removeCourseFromCart: builder.mutation({
      query: () => ({
        url: "delete-course",
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useGetCartOfUserQuery,
  useAddCourseToCartMutation,
  useRemoveCourseFromCartMutation
  
} = cartApi;
