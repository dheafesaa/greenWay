import { ActionType } from "./action";

const initialState = {
  discussions: [],
  discussion: null,
};

const discussionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DISCUSSIONS:
      return {
        ...state,
        discussions: action.payload.discussions,
      };
    case ActionType.CREATE_DISCUSSION:
      return {
        ...state,
        discussion: action.payload.data.discussion,
      };
    case ActionType.TOGGLE_LIKE_DISCUSSION:
      return {
        ...state,
        discussions: state.discussions.map((discussion) => {
          if (discussion.id === action.payload.discussionId) {
            const updatedUpVotesBy = discussion.upVotesBy.includes(
              action.payload.userId,
            )
              ? discussion.upVotesBy.filter((id) => id !== action.payload.userId)
              : [
                  ...discussion.upVotesBy.filter(
                    (id) => id !== action.payload.userId,
                  ),
                  action.payload.userId,
                ];

            const updatedDownVotesBy = discussion.downVotesBy.filter(
              (id) => id !== action.payload.userId,
            );

            return {
              ...discussion,
              upVotesBy: updatedUpVotesBy,
              downVotesBy: updatedDownVotesBy,
            };
          }
          return discussion;
        }),
      };
    case ActionType.TOGGLE_UNLIKE_DISCUSSION:
      return {
        ...state,
        discussions: state.discussions.map((discussion) => {
          if (discussion.id === action.payload.discussionId) {
            const updatedDownVotesBy = discussion.downVotesBy.includes(
              action.payload.userId,
            )
              ? discussion.downVotesBy.filter(
                  (id) => id !== action.payload.userId,
                )
              : [
                  ...discussion.downVotesBy.filter(
                    (id) => id !== action.payload.userId,
                  ),
                  action.payload.userId,
                ];

            const updatedUpVotesBy = discussion.upVotesBy.filter(
              (id) => id !== action.payload.userId,
            );

            return {
              ...discussion,
              upVotesBy: updatedUpVotesBy,
              downVotesBy: updatedDownVotesBy,
            };
          }
          return discussion;
        }),
      };
    case ActionType.TOGGLE_NEUTRALIZE_DISCUSSION:
      return {
        ...state,
        discussions: state.discussions.map((discussion) => {
          if (discussion.id === action.payload.discussionId) {
            return {
              ...discussion,
              upVotesBy: discussion.upVotesBy.filter(
                (id) => id !== action.payload.userId,
              ),
              downVotesBy: discussion.downVotesBy.filter(
                (id) => id !== action.payload.userId,
              ),
            };
          }
          return discussion;
        }),
      };
    default:
      return state;
  }
};

export default discussionReducer;
