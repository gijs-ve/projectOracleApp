import { Letter } from "./letters";
import { Machine, Resource } from "./resources";
import { Word } from "./words";

export type Operator<T extends "public" | "private" = "public"> =
  T extends "public" ? PrivateOperator : PublicOperator;

type PublicOperator = {
  id: string;
  userId: string;
  worldId: string;
  name: string;
  stars: number;
};

type PrivateOperator = PublicOperator & {
  words: Word[];
  letters: Letter[];
  resources: Resource[];
  machines: Machine[];
};
