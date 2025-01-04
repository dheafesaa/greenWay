import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DESTINATIONS: 'RECEIVE_DESTINATIONS',
  RECEIVE_DETAIL_DESTINATION: 'RECEIVE_DETAIL_DESTINATION',
  CREATE_COMMENT_DESTINATION: 'CREATE_COMMENT_DESTINATION',
};

function receiveDestinations(destinations) {
  return {
    type: ActionType.RECEIVE_DESTINATIONS,
    payload: {
      destinations,
    },
  };
}

function receiveDetailDestination(detailDestination) {
  return {
    type: ActionType.RECEIVE_DETAIL_DESTINATION,
    payload: detailDestination,
  };
}

function createCommentDestination(comment) {
  return {
    type: ActionType.CREATE_COMMENT_DESTINATION,
    payload: comment,
  };
}

function asyncReceiveDestinations() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const destinationsData = await api.getAllDestinations();
      dispatch(receiveDestinations(destinationsData));
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1500);
    }
  };
}

function asyncReceiveDetailDestination(destinationId) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const detailDestinationData = await api.getDetailDestination(destinationId);
      dispatch(receiveDetailDestination(detailDestinationData));
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1500);
    }
  };
}

function asyncCreateCommentDestination(destinationId, comment) {
  return async (dispatch) => {
    try {
      const newComment = await api.createCommentDestination(destinationId, comment);
      dispatch(createCommentDestination(newComment));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDestinations,
  asyncReceiveDestinations,
  asyncReceiveDetailDestination,
  asyncCreateCommentDestination,
};
