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

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllArticles,
    getAllAboutUs,
    getAllDestinations,
    getDetailDestination,
    createCommentDestination,
    getAllCampaigns,
    getDetailCampaign,
    getAllDiscussions,
    createDiscussion,
  };
})();

export default api;
