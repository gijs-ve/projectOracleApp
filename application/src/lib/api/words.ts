const route = "/words";
const getWords = async () => {
  const words = await fetch(`${route}`);
  if (!words.ok) {
    throw new Error(words.statusText);
  }
};

const getWord = async (wordId: string) => {
  const word = await fetch(`${route}/${wordId}`);
  if (!word.ok) {
    throw new Error(word.statusText);
  }
  return word.json();
};

export const wordsApi = {
  getWords,
  getWord,
} as const;
