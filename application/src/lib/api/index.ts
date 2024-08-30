import { actionsApi } from "./actions";
import { authApi } from "./auth";
import { leaderboardApi } from "./leaderboard";
import { usersApi } from "./users";
import { wordsApi } from "./words";

export const api = {
  ...wordsApi,
  ...usersApi,
  ...authApi,
  ...leaderboardApi,
  ...actionsApi,
} as const;
