import { ActionType } from './action';

const initialState = {
  aboutUs: [],
};

const aboutUsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ABOUTUS:
      return {
        ...state,
        aboutUs: action.payload.aboutUs,
      };
    default:
      return state;
  }
};

export default aboutUsReducer;
