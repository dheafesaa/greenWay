import api from '../../utils/api';

const ActionType = {
  RECEIVE_REVIEWS: 'RECEIVE_REVIEWS',
};

function receiveReviews(reviews) {
  return {
    type: ActionType.RECEIVE_REVIEWS,
    payload: {
      reviews,
    },
  };
}

function asyncReceiveReviews() {
  return async (dispatch) => {
    try {
      const reviewsData = await api.getAllReviews();
      dispatch(receiveReviews(reviewsData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveReviews,
  asyncReceiveReviews,
};
