import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    toggleGPTSearch: false,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.toggleGPTSearch = !state.toggleGPTSearch;
    },
  },
});

export const { toggleGPTSearch } = searchSlice.actions;
export default searchSlice.reducer;
