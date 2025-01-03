import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import loadingReducer from './loading/reducer';
import articlesReducer from './articles/reducer';
import aboutUsReducer from './aboutUS/reducer';
import destinationsReducer from './destinations/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    loadingBar: loadingBarReducer,
    users: usersReducer, 
    loading: loadingReducer,
    articles: articlesReducer,
    aboutUs: aboutUsReducer,
    destinations: destinationsReducer,
  },
});

export default store;
