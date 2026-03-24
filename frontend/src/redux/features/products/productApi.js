import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/products/`,
    credentials: "include",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        category,
        type,
        minPrice,
        maxPrice,
        isFeatured,
        search,
        page = 1,
        limit = 12,
      }) => {
        const queryParams = new URLSearchParams({
          category: category || "",
          type: type || "",
          minPrice: minPrice || 0,
          maxPrice: maxPrice || "",
          isFeatured: isFeatured || "",
          search: search || "",
          page: page.toString(),
          limit: limit.toString(),
        }).toString();
        return { url: `?${queryParams}`, method: "GET" };
      },
      providesTags: ["Product"],
    }),

    getProductByID: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    getRelatedProducts: builder.query({
      query: (id) => ({
        url: `/related/${id}`,
        method: "GET",
      }),
    }),

    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...productData }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: productData,
      }),
      invalidatesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Product", id },
        { type: "Product", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIDQuery,
  useGetRelatedProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;

export default productApi;
