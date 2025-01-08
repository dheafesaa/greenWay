import { ActionType } from "./action";

const initialState = {
  discussions: [],
  discussion: null,
};

const discussionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DISCUSSIONS:
      return action.payload.discussions;
    case ActionType.CREATE_DISCUSSION:
      return {
        ...state,
        discussion: action.payload.data.discussion,
      };
    default:
      return discussions;
  }
};

export default discussionReducer;
