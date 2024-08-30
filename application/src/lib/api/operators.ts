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
  const operators = await fetchApi(
    `${route}?worldId=${worldId}&take=${take}&offset=${offset}`
  );
  return operators;
};

const getOperator = async (operatorId: string) => {
  const operator = await fetchApi(`${route}/${operatorId}`);
  return operator;
};

export const operatorsApi = {
  getOperators,
  getOperator,
} as const;
