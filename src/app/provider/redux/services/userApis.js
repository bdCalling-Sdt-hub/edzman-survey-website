import baseApis from "../query/baseApis";

export const userApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    profileGet: builder.query({
      query: () => ({
        url: "/user/get-my-profile",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    getNormalUser: builder.query({
      query: () => ({
        url: `/normal-user/get-all`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    profileUpdate: builder.mutation({
      query: ({data}) => ({
        url: "/normal-user/update-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    updateStatus: builder.mutation({
      query: ({ data, id }) => ({
        url: `/user/change-status/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useProfileUpdateMutation,
  useProfileGetQuery,
  useGetNormalUserQuery,
  useUpdateStatusMutation,
} = userApis;
