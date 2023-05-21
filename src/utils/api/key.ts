const BASE_URL = "https://marvel-proxy.nomadcoders.workers.dev";

export const API_KEYS = {
	FETCH_MARVEL_CHARACTER_LIST: `${BASE_URL}/v1/public/characters`,
	FETCH_MARVEL_CHARACTER_DETAIL: `${BASE_URL}/v1/public/characters/`,
} as const;
