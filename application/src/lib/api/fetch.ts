import { serverUrl } from "../constants";
import { Res } from "../types/api";

const apiRoute = "/api";
export const fetchApi = async <T, R = Res<T>>(
  route: string,
  init?: RequestInit
) => {
  const response = await fetch(`${serverUrl}${apiRoute}${route}`, init);
  if (!response.ok) {
    return { ok: false, error: response.statusText } as const;
  }
  return { ok: true, data: response.json() } as R;
};
