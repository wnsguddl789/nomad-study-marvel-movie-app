import { Suspense } from "react";

import { apiCall, API_KEYS } from "@api";
import { Pagination, Character } from "@types";

import CharacterListViewModel from "@/viewModels/marvel/CharacterListViewModel";
import { Typography } from "@atoms";

export type CharacterList = { results: Character[] } & Pagination;

export default function CharacterListPage() {
	return (
		<Suspense fallback={<Typography>Loading...</Typography>}>
			<CharacterListViewModel />
		</Suspense>
	);
}

export const loader = async ({ offset = 10, limit = 10 }: { offset: number; limit: number }) => {
	return apiCall<CharacterList>(
		`${API_KEYS.FETCH_MARVEL_CHARACTER_LIST}?&orderBy=modified&series=24229,1058,2023?offset=${offset}&limit=${limit}`
	);
};
