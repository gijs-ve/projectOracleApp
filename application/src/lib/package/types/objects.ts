type DataObject<T> = {
  id: string;
  ref: string;
} & T;

type WorldObject<T> = Omit<
  T,
  "id" | "worldId" | "operatorId" | "roomId" | "x" | "y"
>;
