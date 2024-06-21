
import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: "/api/"
});

instanceAxios.interceptors.request.use(
  (config) => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; 
    const accessToken = isAdmin 
      ? localStorage.getItem("admin_accesToken") 
      : localStorage.getItem("user_accesToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const refreshToken = async () => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; 
  const refreshToken = isAdmin 
    ? localStorage.getItem("admin_refreshToken") 
    : localStorage.getItem("user_refreshToken");

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  try {
    const response = await axios.post('/api/auth/refresh', { refresh_token: refreshToken });
    const { access_token, refresh_token } = response.data;

    if (isAdmin) {
      localStorage.setItem("admin_accesToken", access_token);
      if (refresh_token) {
        localStorage.setItem("admin_refreshToken", refresh_token);
      }
    } else {
      localStorage.setItem("user_accesToken", access_token);
      if (refresh_token) {
        localStorage.setItem("user_refreshToken", refresh_token);
      }
    }

    return access_token;
  } catch (error) {
    throw new Error("Refresh failed");
  }
};

instanceAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refreshToken();
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return instanceAxios(error.config);
      } catch (refreshError) {
        localStorage.removeItem('user_accesToken');
        localStorage.removeItem('admin_accesToken');
        localStorage.removeItem('user_refreshToken');
        localStorage.removeItem('admin_refreshToken');
        localStorage.removeItem('isUser');
        localStorage.removeItem('isAdmin');
      }
    }
    return Promise.reject(error);
  }
);

export { instanceAxios };






