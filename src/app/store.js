import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogsSlice';
import categoriesReducer from '../features/categoriesSlice';
import themeReducer from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    categories: categoriesReducer,
    theme: themeReducer,
  },
});
