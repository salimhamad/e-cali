import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// ecommerceApi ama nawy api slice akkaya abe la stora binaseny boaway bakary bheny
export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({
    // limki backenda lasar aw porta run abe
    // abe front w backend bayakawa run kayt boaway front  datakan wargret la backend
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    // login krdnw baraward krdny datay front ba away backend ta bazne useraka haya yaan
    login: builder.mutation({
      // aw datayanaya ka bomanyat email, password  boman barawrdakat baway ka daxlyakayn la login page kaya
      // reqiest aneryn bo routy login la bachend a
      query: ({ email, password }) => ({
        url: `login`,
        method: "POST",
        body: { email, password },
      }),
    }),

    register: builder.mutation({
      query: ({ email, password }) => ({
        url: `register`,
        method: "POST",
        body: { email, password },
      }),
    }),

    // wargrtnaway pruduct la backend
    getProducts: builder.query({
      query: (name) => `products`,
    }),

    // products/findproductbycategory/:category
    getProductBycategory: builder.query({
      query: (category) => `/products/findproductbycategory/${category}`,
    }),

    // getProductBycategory: builder.query({
    //   query: (category) => `/products/findproductbycategory/${category}`,
    // }),



  }),
});
// endpointakan exportakayt w dway la filakany kaya importy akayt
export const { useGetProductsQuery, useLoginMutation, useRegisterMutation , useLazyGetProductBycategoryQuery } =
  ecommerceApi;
//  abe am file a wak slice lanaw storakaya bnasenyt boaway la filakany kaya btwany bakary byanyt
