import baseApis from "../query/baseApis";

export const storyApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getAllStory: builder.query({
      query: ({ searchTerm, status, sort }) => {
        const params = { searchTerm, status, sort };
        return {
          url: "/story/all-story",
          method: "GET",
          params,
        };
      },
      providesTags: ["story"],
    }),
    createNewStory: builder.mutation({
      query: (data) => ({
        url: "/story/create-story",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["story"],
    }),
    singleStoryGet: builder.query({
      query: ({ id }) => ({
        url: `/story/single-story/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["story"],
    }),
    approveStory: builder.mutation({
      query: ({ id }) => ({
        url: `/story/approve-story/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["story"],
    }),
    deleteStory: builder.mutation({
      query: ({ id }) => ({
        url: `/story/delete-story/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["story"],
    }),
  }),
});

export const {
  useGetAllStoryQuery,
  useApproveStoryMutation,
  useDeleteStoryMutation,
  useSingleStoryGetQuery,
  useCreateNewStoryMutation
} = storyApis;
