import baseApis from "../query/baseApis";

export const blogApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: ({ searchTerm, sort, page, limit }) => ({
        url: "/blog/all-blogs",
        method: "GET",
        params: {
          searchTerm,
          sort,
          page,
          limit,
        },
      }),
      providesTags: ["blog"],
    }),
    postNewBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/create-blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),

    singleBlogGet: builder.query({
      query: ({ id }) => ({
        url: `/blog/single-blog/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["blog"],
    }),

    deleteBlog: builder.mutation({
      query: ({ id }) => ({
        url: `/blog/delete-blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blog/update-blog/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  usePostNewBlogMutation,
  useGetAllBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useSingleBlogGetQuery,
} = blogApis;
