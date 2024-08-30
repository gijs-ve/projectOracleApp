import { fetchApi } from "./fetch";

const route = "/auth";
const login = async (email: string, password: string) => {
  const response = await fetchApi(`${route}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const register = async (email: string, password: string) => {
  const response = await fetchApi(`${route}/register`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const authApi = {
  login,
  register,
} as const;
