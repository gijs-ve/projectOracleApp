const apiRoute = "/api";
export const fetchApi = async (route: string, init?: RequestInit) => {
  const response = await fetch(`${apiRoute}${route}`, init);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
