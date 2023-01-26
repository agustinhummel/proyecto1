import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nextPage: false,
  prevPage: false,
  pagination: {
    limit: 12,
    offset: 0,
  },
}

export const paginationSlice = createSlice({
  name: 'paginationData',
  initialState,
  reducers: {
    setNextPage: (state, action) => {
      state.nextPage = action.payload
    },
    setPrevPage: (state, action) => {
      state.prevPage = action.payload
    },
    setPagination: (state, action) => {
      state.pagination = action.payload
    },
  },
});

export const { setNextPage, setPrevPage, setPagination } = paginationSlice.actions;

export default paginationSlice.reducer;