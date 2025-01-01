import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_ARTICLES: 'RECEIVE_ARTICLES',
};

function receiveArticles(articles) {
  return {
    type: ActionType.RECEIVE_ARTICLES,
    payload: {
      articles,
    },
  };
}

function asyncReceiveArticles() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const articlesData = await api.getAllArticles();
      dispatch(receiveArticles(articlesData));
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
  receiveArticles,
  asyncReceiveArticles,
};
