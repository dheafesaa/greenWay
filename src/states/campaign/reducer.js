import { ActionType } from './action';

const initialState = {
  campaigns: [],
};

const campaignReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload.campaigns,
      };
    default:
      return state;
  }
};

export default campaignReducer;
