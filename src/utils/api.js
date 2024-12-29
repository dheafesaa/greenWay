const api = (() => {
  const BASE_URL = 'https://restapi-greenway.vercel.app';

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  async function register({ name, email, password }) {
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { token } } = responseJson;

    return token;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data;
  }

  async function getAllCampaigns() {
    const response = await fetch(`${BASE_URL}/campaigns`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { campaigns } } = responseJson;

    return campaigns;
  }

  async function getAllReviews() {
    const response = await fetch(`${BASE_URL}/reviews`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { reviews } } = responseJson;

    return reviews;
  }

  async function getAllArticles() {
    const response = await fetch(`${BASE_URL}/articles`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { articles } } = responseJson;

    return articles;
  }

  async function getAllDestinations() {
    const response = await fetch(`${BASE_URL}/destinations`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data;
  }

  async function getAllAboutUs() {
    const response = await fetch(`${BASE_URL}/about-us`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { aboutUs } } = responseJson;

    return aboutUs;
  }

  async function getDetailDestination(id) {
    const response = await fetch(`${BASE_URL}/destination/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { detailDestination } } = responseJson;

    return detailDestination;
  }

  async function getDetailCampaign(id) {
    const response = await fetch(`${BASE_URL}/campaign/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { campaign } } = responseJson;

    return campaign;
  }

  async function getAllDiscussions() {
    const response = await fetch(`${BASE_URL}/discussions`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { discussions } } = responseJson;

    return discussions;
  }

  async function createDiscussion(title, category, body) {
    const response = await _fetchWithAuth(`${BASE_URL}/discussion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, category, body }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { discussion } } = responseJson;

    return discussion;
  }

  async function toggleLikeDiscussion(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/discussion/${id}/up-votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        discussionId: id,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function toggleUnlikeDiscussion(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/discussion/${id}/down-votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        discussionId: id,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function toggleNeutralizeDiscussion(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/discussion/${id}/netral-votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        discussionId: id,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function getDetailDiscussion(id) {
    const response = await fetch(`${BASE_URL}/discussion/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { detailDiscussion } } = responseJson;

    return detailDiscussion;
  }

  async function toggleLikeComment(discussionId, commentId) {
    const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/comment/${commentId}/up-votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        discussionId,
        commentId,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function toggleUnlikeComment(discussionId, commentId) {
    const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/comment/${commentId}/down-votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        discussionId,
        commentId,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function toggleNeutralizeComment(discussionId, commentId) {
    const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/comment/${commentId}/netral-votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        discussionId,
        commentId,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function createCommentDiscussion(discussionId, comment) {
    const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ discussionId, comment }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { comment: newComment } } = responseJson;

    return newComment;
  }

  async function createCommentDestination(destinationId, comment) {
    const response = await _fetchWithAuth(`${BASE_URL}/destination/${destinationId}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ destinationId, comment }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { comment: newComment } } = responseJson;

    return newComment;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllCampaigns,
    getAllReviews,
    getAllArticles,
    getAllDestinations,
    createDiscussion,
    getAllAboutUs,
    getDetailDestination,
    createCommentDestination,
    getDetailCampaign,
    getAllDiscussions,
    toggleLikeDiscussion,
    toggleUnlikeDiscussion,
    toggleNeutralizeDiscussion,
    getDetailDiscussion,
    toggleLikeComment,
    toggleUnlikeComment,
    toggleNeutralizeComment,
    createCommentDiscussion,
  };
})();

export default api;
