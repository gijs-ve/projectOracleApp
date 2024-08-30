import { fetchApi } from "./fetch";

const route = "/auctions";
const getAuctions = async ({
  take,
  offset,
}: {
  take: number;
  offset: number;
}) => {
  const response = await fetchApi(
    `${route}/auctions?take=${take}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const createOffer = async ({
  auctionId,
  bid,
}: {
  auctionId: string;
  bid: number;
}) => {
  const response = await fetchApi(`${route}/auctions/offer?id=${auctionId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bid }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

export const auctionsApi = {
  getAuctions,
  createOffer,
} as const;
