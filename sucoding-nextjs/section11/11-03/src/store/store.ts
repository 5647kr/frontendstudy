"use client";

import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slice/countSlice";

export const store = configureStore({
  reducer: {
    count: countSlice,
  },
});

// 리덕스 스토어의 전체 상태의 타입을 자동으로 추론해 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
