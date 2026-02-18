import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_URL_BACK }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (user: { email: string; password: string; provider: string }) => ({
        url: "users/User", // chemin complet correct
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useAddUserMutation } = userApi;
