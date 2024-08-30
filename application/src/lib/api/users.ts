export const getUser = async (id: string) => {
  const user = await fetch(`/users/${id}`);
  if (!user.ok) {
    throw new Error(user.statusText);
  }
  return user.json();
};

export const usersApi = {
  getUser,
} as const;
