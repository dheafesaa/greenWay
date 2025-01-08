import { ActionType } from './action';

const initialState = [];

const reviewsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_REVIEWS:
      return action.payload.reviews;
    default:
      return state;
  }
};

export default reviewsReducer;
