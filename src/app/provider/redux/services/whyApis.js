import baseApis from "../query/baseApis";

export const whyApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getAllWhy: builder.query({
      query: () => ({
        url: "/why/get-all-why",
        method: "GET",
      }),
      providesTags: ["why"],
    }),
    getMyWhy: builder.query({
      query: () => ({
        url: "/why/get-my-why",
        method: "GET",
      }),
      providesTags: ["personal-why"],
    }),
    genarateWhy: builder.mutation({
      query: (data) => ({
        url: "/why/generate-why-overview",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["personal-why"],
    }),
    deleteWhy: builder.mutation({
      query: (id) => ({
        url: `/why/delete-why/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["personal-why"],
    }),
    getSingleWhy: builder.query({
      query: ({id}) => ({
        url: `/why/get-single-why/${id}`,
        method: "GET",
      }),
      providesTags: ["personal-why"],
    }),
  }),
});

export const {
  useGetAllWhyQuery,
  useGetMyWhyQuery,
  useGenarateWhyMutation,
  useGetSingleWhyQuery,
  useDeleteWhyMutation,
} = whyApis;
