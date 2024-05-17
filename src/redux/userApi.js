import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUser: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["Users"],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `${id ? `/users${id}` : ""}`,
        id,
      }),
      providesTags: ["Users"],
    }),
    // Post request
    createUser: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    // Patch request
    updateUser: build.mutation({
      query: ({ _id, body }) => ({
        url: `/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    // Delete request
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserQuery,
  useGetSingleUserQuery,
} = userApi;
