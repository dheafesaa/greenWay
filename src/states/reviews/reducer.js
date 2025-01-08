import { ActionType } from "./action";

const initialState = {
  reviews: [],
};

const reviewReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_REVIEWS:
      return {
        ...state,
        reviews: action.payload.reviews,
      };
    default:
      return state;
  }
};

export default reviewReducer;
