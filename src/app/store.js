import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles/articlesSlice';

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
