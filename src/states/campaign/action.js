import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_CAMPAIGNS: 'RECEIVE_CAMPAIGNS',
};

function receiveCampaigns(campaigns) {
  return {
    type: ActionType.RECEIVE_CAMPAIGNS,
    payload: {
      campaigns,
    },
  };
}

function asyncReceiveCampaigns() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const campaignsData = await api.getAllCampaigns();
      dispatch(receiveCampaigns(campaignsData));
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
  receiveCampaigns,
  asyncReceiveCampaigns,
};
