import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DISCUSSIONS: 'RECEIVE_DISCUSSIONS',
  CREATE_DISCUSSION: 'CREATE_DISCUSSION',
  TOGGLE_LIKE_DISCUSSION: 'TOGGLE_LIKE_DISCUSSION',
  TOGGLE_UNLIKE_DISCUSSION: 'TOGGLE_UNLIKE_DISCUSSION',
  TOGGLE_NEUTRALIZE_DISCUSSION: 'TOGGLE_NEUTRALIZE_DISCUSSION',
};

function receiveDiscussions(discussions) {
  return {
    type: ActionType.RECEIVE_DISCUSSIONS,
    payload: {
      discussions,
    },
  };
}

function createDiscussion(data) {
  return {
    type: ActionType.CREATE_DISCUSSION,
    payload: {
      data,
    },
  };
}

function toggleLikeDiscussion({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_DISCUSSION,
    payload: {
      discussionId,
      userId,
    },
  };
}

function toggleUnlikeDiscussion({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_UNLIKE_DISCUSSION,
    payload: {
      discussionId,
      userId,
    },
  };
}

function toggleNeutralizeDiscussion({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_DISCUSSION,
    payload: {
      discussionId,
      userId,
    },
  };
}

function asyncReceiveDiscussions() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const discussionsData = await api.getAllDiscussions();
      dispatch(receiveDiscussions(discussionsData));
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1500);
    }
  };
}

function asyncCreateDiscussion(title, category, body) {
  return async (dispatch) => {
    try {
      const newData = await api.createDiscussion(title, category, body);
      dispatch(createDiscussion(newData));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToogleLikeDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('You must be logged in to vote.');
      return;
    }
    dispatch(toggleLikeDiscussion({ discussionId, userId: authUser.id }));
    try {
      await api.toggleLikeDiscussion(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeDiscussion({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToogleUnlikeDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('You must be logged in to vote.');
      return;
    }
    dispatch(toggleUnlikeDiscussion({ discussionId, userId: authUser.id }));
    try {
      await api.toggleUnlikeDiscussion(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUnlikeDiscussion({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToogleNeutralizeDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralizeDiscussion({ discussionId, userId: authUser.id }));
    try {
      await api.toggleNeutralizeDiscussion(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeDiscussion({ discussionId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveDiscussions,
  asyncReceiveDiscussions,
  asyncCreateDiscussion,
  asyncToogleLikeDiscussion, 
  asyncToogleUnlikeDiscussion, 
  asyncToogleNeutralizeDiscussion,
};
