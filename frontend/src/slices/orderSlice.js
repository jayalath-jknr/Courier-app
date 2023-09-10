import { apiSlice } from './apiSlice';

const ORDERS_URL = '/api/orders';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: orderData,
      }),
    }),
    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL,
        method: 'GET',
      }),
    }),
    updateOrder: builder.mutation({
      query: (orderData) => ({
        url: `${ORDERS_URL}/${orderData.id}`, // Assuming orderData contains an 'id' field
        method: 'PUT',
        body: orderData,
      }),
    }),
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApiSlice;
