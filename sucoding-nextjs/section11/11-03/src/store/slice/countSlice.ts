import { createSlice } from "@reduxjs/toolkit";

interface CountState {
  value: number;
}

const initialState: CountState = {
  value: 0,
};

const countSlice = createSlice({
  name: "countSlice", // 파일이름과 같이 해주면 된다.
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = countSlice.actions;

export default countSlice.reducer;
