import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DESTINATIONS: 'RECEIVE_DESTINATIONS',
};

function receiveDestinations(destinations) {
  return {
    type: ActionType.RECEIVE_DESTINATIONS,
    payload: {
      destinations,
    },
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
      }, 3000);
    }
  };
}

export {
  ActionType,
  receiveDestinations,
  asyncReceiveDestinations,
};
