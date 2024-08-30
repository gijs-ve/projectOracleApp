import { Letter } from "../types/letters";
import { Word } from "../types/words";
import { fetchApi } from "./fetch";

const route = "/actions";

const getActions = async () => {
  const actions = await fetchApi(`${route}`);
  if (!actions.ok) {
    throw new Error(actions.statusText);
  }
  return actions.json();
};

const getAction = async (id: string) => {
  const action = await fetchApi(`${route}/${id}`);
  if (!action.ok) {
    throw new Error(action.statusText);
  }
  return action.json();
};

const buyLetter = async (letter: Letter) => {
  const response = await fetchApi(`${route}/letters/buy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letter }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const buyWord = async (word: Word) => {
  const response = await fetchApi(`${route}/words/buy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const sellLetter = async (letter: Letter) => {
  const response = await fetchApi(`${route}/letters/sell`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letter }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const sellWord = async (word: Word) => {
  const response = await fetchApi(`${route}/words/sell`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const formWord = async (letters: Letter[]) => {
  const response = await fetchApi(`${route}/words/form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letters }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const demolishLetter = async (letter: Letter) => {
  const response = await fetchApi(`${route}/letters/demolish`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letter }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const demolishWord = async (word: Word) => {
  const response = await fetchApi(`${route}/words/demolish`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const submitOffer = async ({
  auctionItemId,
  bid,
}: {
  auctionItemId: string;
  bid: number;
}) => {
  const response = await fetchApi(`${route}/auctions/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ auctionItemId, bid }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const submitPrompt = async (prompt: Word[]) => {
  const response = await fetchApi(`${route}/oracle/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

export const actionsApi = {
  buyWord,
  buyLetter,
  demolishLetter,
  demolishWord,
  formWord,
  sellLetter,
  sellWord,
  submitOffer,
  submitPrompt,
} as const;
