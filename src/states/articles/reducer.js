import { ActionType } from './action';

const initialState = {
  articles: [],
};

const articlesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
      };
    default:
      return state;
  }
};

export default articlesReducer;
