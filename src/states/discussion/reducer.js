import { ActionType } from './action';

const discussionReducer = (discussions = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DISCUSSIONS:
      return action.payload.discussions;
    default:
      return discussions;
  }
};

export default discussionReducer;
