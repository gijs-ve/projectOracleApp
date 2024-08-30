const route = "/words";
const getWords = async () => {
  const words = await fetch(`${route}`);
  if (!words.ok) {
    throw new Error(words.statusText);
  }
};

const getWord = async (id: string) => {
  const word = await fetch(`${route}/${id}`);
  if (!word.ok) {
    throw new Error(word.statusText);
  }
  return word.json();
};

export const wordsApi = {
  getWords,
  getWord,
} as const;
