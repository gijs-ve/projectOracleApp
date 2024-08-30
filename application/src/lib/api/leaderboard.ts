const route = "/leaderboard";
const getLeaderboard = async ({
  world,
  take,
  offset,
}: {
  world: string;
  take: number;
  offset: number;
}) => {
  const leaderboard = await fetch(
    `${route}?world=${world}&take=${take}&offset=${offset}`
  );
  if (!leaderboard.ok) {
    throw new Error(leaderboard.statusText);
  }
  return leaderboard.json();
};

export const leaderboardApi = {
  getLeaderboard,
} as const;
