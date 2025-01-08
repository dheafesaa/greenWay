import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DISCUSSIONS: 'RECEIVE_DISCUSSIONS',
  CREATE_DISCUSSION: 'CREATE_DISCUSSION',
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

export {
  ActionType,
  receiveDiscussions,
  asyncReceiveDiscussions,
  asyncCreateDiscussion,
};
