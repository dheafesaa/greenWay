import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DISCUSSIONS: 'RECEIVE_DISCUSSIONS',
};

function receiveDiscussions(discussions) {
  return {
    type: ActionType.RECEIVE_DISCUSSIONS,
    payload: {
      discussions,
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

export {
  ActionType,
  receiveDiscussions,
  asyncReceiveDiscussions,
};
