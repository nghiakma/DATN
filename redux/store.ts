"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authSlice,
    },
    devTools: false,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

// gọi load user mỗi khi trang được tải
const initializeApp = async () => {
  await store.dispatch(
    //đảm bảo thông tin người dùng được cập nhật mới nhất
    //bỏ qua cache và thực hiện lại yêu cầu tới server
    apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};

initializeApp();