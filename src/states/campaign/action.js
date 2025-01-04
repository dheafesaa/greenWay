import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_CAMPAIGNS: 'RECEIVE_CAMPAIGNS',
  RECEIVE_DETAIL_CAMPAIGN: 'RECEIVE_DETAIL_CAMPAIGN',
};

function receiveCampaigns(campaigns) {
  return {
    type: ActionType.RECEIVE_CAMPAIGNS,
    payload: {
      campaigns,
    },
  };
}

function receiveDetailCampaign(detailCampaign) {
    return {
      type: ActionType.RECEIVE_DETAIL_CAMPAIGN,
      payload: {
        detailCampaign,
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
      }, 1500);
    }
  };
}

function asyncReceiveDetailCampaign(idCampaign) {
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
        const detailCampaignData = await api.getDetailCampaign(idCampaign);
        dispatch(receiveDetailCampaign(detailCampaignData));
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
  receiveCampaigns,
  asyncReceiveCampaigns,
  asyncReceiveDetailCampaign,
};
