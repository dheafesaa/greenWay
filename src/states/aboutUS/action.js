import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_ABOUTUS: 'RECEIVE_ABOUTUS',
};

function receiveAboutUs(aboutUs) {
  return {
    type: ActionType.RECEIVE_ABOUTUS,
    payload: {
      aboutUs,
    },
  };
}

function asyncReceiveAboutUs() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const aboutUsData = await api.getAllAboutUs();
      dispatch(receiveAboutUs(aboutUsData));
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
  receiveAboutUs,
  asyncReceiveAboutUs,
};
