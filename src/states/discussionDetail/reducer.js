import { ActionType } from './action';

const initialState = {
  detailDiscussion: null,
};

const detailDiscussionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_DISCUSSION:
      return {
        ...state,
        detailDiscussion: action.payload.detailDiscussion,
      };
    case ActionType.TOGGLE_LIKE_DISCUSSION_DETAIL:
      return {
        ...state,
        detailDiscussion: {
          ...state.detailDiscussion,
          upVotesBy: action.payload.isLiked
            ? state.detailDiscussion.upVotesBy.filter((id) => id !== action.payload.userId)
            : [...state.detailDiscussion.upVotesBy
              .filter((id) => id !== action.payload.userId), action.payload.userId],
          downVotesBy: state.detailDiscussion.downVotesBy
            .filter((id) => id !== action.payload.userId),
        },
      };
    case ActionType.TOGGLE_UNLIKE_DISCUSSION_DETAIL:
      return {
        ...state,
        detailDiscussion: {
          ...state.detailDiscussion,
          downVotesBy: action.payload.isDisliked
            ? state.detailDiscussion.downVotesBy.filter((id) => id !== action.payload.userId)
            : [...state.detailDiscussion.downVotesBy
              .filter((id) => id !== action.payload.userId), action.payload.userId],
          upVotesBy: state.detailDiscussion.upVotesBy
            .filter((id) => id !== action.payload.userId),
        },
      };
    case ActionType.TOGGLE_NEUTRALIZE_DISCUSSION_DETAIL:
      return {
        ...state,
        detailDiscussion: {
          ...state.detailDiscussion,
          upVotesBy: state.detailDiscussion.upVotesBy
            .filter((id) => id !== action.payload.userId),
          downVotesBy: state.detailDiscussion.downVotesBy
            .filter((id) => id !== action.payload.userId),
        },
      };
    case ActionType.TOGGLE_LIKE_COMMENT:
      return {
        ...state,
        detailDiscussion: {
          ...state.detailDiscussion,
          comments: state.detailDiscussion.comments.map((comment) => {
            if (comment.id === action.payload.commentId) {
              const updatedUpVotesBy = comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : [...comment.upVotesBy.filter((id) => id !== action.payload.userId),
                  action.payload.userId];

              const updatedDownVotesBy = comment.downVotesBy
                .filter((id) => id !== action.payload.userId);

              return {
                ...comment,
                upVotesBy: updatedUpVotesBy,
                downVotesBy: updatedDownVotesBy,
              };
            }
            return comment;
          }),
        },
      };
    case ActionType.TOGGLE_UNLIKE_COMMENT:
      return {
        ...state,
        detailDiscussion: {
          ...state.detailDiscussion,
          comments: state.detailDiscussion.comments.map((comment) => {
            if (comment.id === action.payload.commentId) {
              const updatedDownVotesBy = comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                : [...comment.downVotesBy.filter((id) => id !== action.payload.userId),
                  action.payload.userId];

              const updatedUpVotesBy = comment.upVotesBy
                .filter((id) => id !== action.payload.userId);

              return {
                ...comment,
                upVotesBy: updatedUpVotesBy,
                downVotesBy: updatedDownVotesBy,
              };
            }
            return comment;
          }),
        },
      };
    case ActionType.TOGGLE_NEUTRALIZE_COMMENT:
      return {
        ...state,
        detailDiscussion: {
          ...state.detailDiscussion,
          comments: state.detailDiscussion.comments.map((comment) => {
            if (comment.id === action.payload.commentId) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
                downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
              };
            }
            return comment;
          }),
        },
      };
    case ActionType.CREATE_COMMENT_DISCUSSION:
      return {
        ...state,
        detailDiscussion: {
          ...state.detailDiscussion,
          comments: [action.payload.comment, ...state.detailDiscussion.comments],
        },
      };
    default:
      return state;
  }
};

export default detailDiscussionReducer;
