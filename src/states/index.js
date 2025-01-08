import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import loadingReducer from './loading/reducer';
import articlesReducer from './articles/reducer';
import destinationReducer from './destinations/reducer';
import campaignReducer from './campaign/reducer';
import discussionReducer from './discussion/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    loadingBar: loadingBarReducer,
    users: usersReducer, 
    loading: loadingReducer,
    articles: articlesReducer,
    destination: destinationReducer,
    campaign: campaignReducer,
    discussion: discussionReducer,
  },
});

export default store;
