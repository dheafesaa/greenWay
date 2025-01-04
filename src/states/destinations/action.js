import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DESTINATIONS: 'RECEIVE_DESTINATIONS',
  RECEIVE_DETAIL_DESTINATION: 'RECEIVE_DETAIL_DESTINATION',
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

export {
  ActionType,
  receiveDestinations,
  asyncReceiveDestinations,
  asyncReceiveDetailDestination,
};
