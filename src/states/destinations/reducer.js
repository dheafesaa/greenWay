import { ActionType } from "./action";

const initialState = {
  destinations: [],
  detailDestination: null,
};

const destinationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DESTINATIONS:
      return {
        ...state,
        destinations: action.payload.destinations,
      };
    case ActionType.RECEIVE_DETAIL_DESTINATION:
      return {
        ...state,
        detailDestination: action.payload,
      };
    default:
      return state;
  }
};

export default destinationReducer;
