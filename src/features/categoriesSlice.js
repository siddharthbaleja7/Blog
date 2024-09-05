import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Technology', 'Travel', 'Food', 'Lifestyle'],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
