import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArticle } from './articlesAPI';

const initialState = {
  articleCollections: [],
  isLoaded: false,
  total: 0,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(articleAsync(URL))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const articleAsync = createAsyncThunk(
  'article/fetchArticle',
  async (url) => {
    const response = await fetchArticle(url);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    total: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.total += 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    articleCollections: (state, action) => {
      return state;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(articleAsync.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(articleAsync.fulfilled, (state, action) => {
        return {
          articleCollections: action.payload.data,
          isLoaded: true,
          total: action.payload.meta.total,
        };
      });
  },
});

export const { increment, decrement, incrementByAmount } = articleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getArticleCollections = (state) =>
  state.articles.articleCollections;
export const getIsLoaded = (state) => state.articles.isLoaded;
export const getTotal = (state) => state.articles.total;

export default articleSlice.reducer;
