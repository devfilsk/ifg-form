export const TOKEN_KEY = "AuthToken";

export const isAuthenticated = () => getToken();

export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (err) {
    return undefined
  }
}

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, `Bearer ${token}`);
  return isAuthenticated()
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};


