import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    valueImputSearch: "",
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setValueImputSearch: (state, action) => {
        state.valueImputSearch = action.payload;
      }
    },
  });

export const { setLoading, setValueImputSearch  } = uiSlice.actions;

export default uiSlice.reducer;
