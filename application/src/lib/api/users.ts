export const getUser = async (userId: string) => {
  const user = await fetch(`/users/${userId}`);
  if (!user.ok) {
    throw new Error(user.statusText);
  }
  return user.json();
};

export const usersApi = {
  getUser,
} as const;
