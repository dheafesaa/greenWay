import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DETAIL_DISCUSSION: 'RECEIVE_DETAIL_DISCUSSION',
  TOGGLE_LIKE_DISCUSSION_DETAIL: 'TOGGLE_LIKE_DISCUSSION_DETAIL',
  TOGGLE_UNLIKE_DISCUSSION_DETAIL: 'TOGGLE_UNLIKE_DISCUSSION_DETAIL',
  TOGGLE_NEUTRALIZE_DISCUSSION_DETAIL: 'TOGGLE_NEUTRALIZE_DISCUSSION_DETAIL',
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
  TOGGLE_UNLIKE_COMMENT: 'TOGGLE_UNLIKE_COMMENT',
  TOGGLE_NEUTRALIZE_COMMENT: 'TOGGLE_NEUTRALIZE_COMMENT',
  CREATE_COMMENT_DISCUSSION: 'CREATE_COMMENT_DISCUSSION',
};

function receiveDetailDiscussion(detailDiscussion) {
  return {
    type: ActionType.RECEIVE_DETAIL_DISCUSSION,
    payload: {
      detailDiscussion,
    },
  };
}

function toggleLikeDiscussionDetail({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_DISCUSSION_DETAIL,
    payload: {
      discussionId,
      userId,
    },
  };
}

function toggleUnlikeDiscussionDetail({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_UNLIKE_DISCUSSION_DETAIL,
    payload: {
      discussionId,
      userId,
    },
  };
}

function toggleNeutralizeDiscussionDetail({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_DISCUSSION_DETAIL,
    payload: {
      discussionId,
      userId,
    },
  };
}

function toggleLikeComment({ discussionId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT,
    payload: {
      discussionId,
      commentId,
      userId,
    },
  };
}

function toggleUnlikeComment({ discussionId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UNLIKE_COMMENT,
    payload: {
      discussionId,
      commentId,
      userId,
    },
  };
}

function toggleNeutralizeComment({ discussionId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_COMMENT,
    payload: {
      discussionId,
      commentId,
      userId,
    },
  };
}

function createCommentDiscussion(comment) {
  return {
    type: ActionType.CREATE_COMMENT_DISCUSSION,
    payload: {
      comment,
    },
  };
}

function asyncReceiveDetailDiscussion(discussionId) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const detailDiscussionData = await api.getDetailDiscussion(discussionId);
      dispatch(receiveDetailDiscussion(detailDiscussionData));
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
    }
  };
}

function asyncToggleLikeDetailDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('You must be logged in to vote.');
      return;
    }
    dispatch(toggleLikeDiscussionDetail({ discussionId, userId: authUser.id }));
    try {
      await api.toggleLikeDiscussionDetail(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeDiscussionDetail({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleUnlikeDetailDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('You must be logged in to vote.');
      return;
    }
    dispatch(toggleUnlikeDiscussionDetail({ discussionId, userId: authUser.id }));
    try {
      await api.toggleUnlikeDiscussionDetail(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUnlikeDiscussionDetail({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralizeDetailDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralizeDiscussionDetail({ discussionId, userId: authUser.id }));
    try {
      await api.toggleNeutralizeDiscussionDetail(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeDiscussionDetail({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleLikeComment(discussionId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('Please login first!');
      return;
    }
    dispatch(toggleLikeComment({ commentId, userId: authUser.id }));
    try {
      await api.toggleLikeComment(discussionId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeComment({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleUnlikeComment(discussionId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('Please login first!');
      return;
    }
    dispatch(toggleUnlikeComment({ commentId, userId: authUser.id }));
    try {
      await api.toggleUnlikeComment(discussionId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUnlikeComment({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralizeComment(discussionId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralizeComment({ commentId, userId: authUser.id }));
    try {
      await api.toggleNeutralizeComment(discussionId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeComment({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncCreateCommentDiscussion(discussionId, comment) {
  return async (dispatch) => {
    try {
      const newComment = await api.createCommentDiscussion(discussionId, comment);
      dispatch(createCommentDiscussion(newComment));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDetailDiscussion,
  asyncReceiveDetailDiscussion,
  asyncToggleLikeDetailDiscussion,
  asyncToggleUnlikeDetailDiscussion,
  asyncToggleNeutralizeDetailDiscussion,
  asyncToggleLikeComment,
  asyncToggleUnlikeComment,
  asyncToggleNeutralizeComment,
  asyncCreateCommentDiscussion,
};
