import { ActionType } from "./action";

const initialState = {
  campaigns: [],
  detailCampaign: null,
};

const campaignReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload.campaigns,
      };
    case ActionType.RECEIVE_DETAIL_CAMPAIGN:
      return {
        ...state,
        detailCampaign: action.payload.detailCampaign,
      };
    default:
      return state;
  }
};

export default campaignReducer;
