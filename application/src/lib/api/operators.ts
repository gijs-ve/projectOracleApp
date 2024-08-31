import { Operator } from "../package/types/operators";
import { fetchApi } from "./fetch";

const route = "/operators";
const getOperators = async ({
  worldId,
  take,
  offset,
}: {
  worldId: string;
  take: number;
  offset: number;
}) => {
  const response = await fetchApi<Operator[]>(
    `${route}?worldId=${worldId}&take=${take}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error(response.error);
  }
  return response.data;
};

const getOperator = async (operatorId: string) => {
  const response = await fetchApi<Operator>(`${route}/${operatorId}`);
  if (!response.ok) {
    throw new Error(response.error);
  }
  return response.data;
};

export const operatorsApi = {
  getOperators,
  getOperator,
} as const;
