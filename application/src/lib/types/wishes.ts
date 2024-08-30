import { Operator } from "./operators";

export const wishTypes = ["history", "sciene"] as const;
export type WishType = (typeof wishTypes)[number];
export type Wish = {
  id: string;
  worldId: string;
  goalId: string;
  word: string;
  type: WishType;
  definition: string;
  attempts: number;
  wonBy: Omit<Operator, "worldId">[];
};
