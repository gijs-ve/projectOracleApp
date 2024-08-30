import { Letter } from "./letters";
import { Resource } from "./resources";
import { Word } from "./words";

type Role = "admin" | "user";
export type User<T extends "public" | "private" = "public"> = T extends "public"
  ? PublicUser
  : PrivateUser;
export type Self = User<"private">;

type PublicUser = {
  id: string;
  name: string;
  stars: number;
};

type PrivateUser = PublicUser & {
  email: string;
  role: Role;
  words: Word[];
  letters: Letter[];
  resources: Resource[];
};
