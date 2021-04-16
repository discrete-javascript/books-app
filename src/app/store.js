import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import articleReducer from '../features/articles/articlesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    articles: articleReducer,
  },
});
