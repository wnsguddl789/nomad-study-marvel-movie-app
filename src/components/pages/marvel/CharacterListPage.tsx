import { Suspense } from "react";

import { apiCall, API_KEYS } from "@common/utils/api";

import CharacterListViewModel from "@marvel/viewModels/CharacterListViewModel";
import type { CharacterListType } from "@marvel/types/CharacterList.type";

import { Typography } from "@atoms";

export default function CharacterListPage() {
	return (
		<Suspense fallback={<Typography>Loading...</Typography>}>
			<CharacterListViewModel />
		</Suspense>
	);
}

export const characterListLoader = async ({
	offset = 10,
	limit = 10,
}: {
	offset: number;
	limit: number;
}) => {
	return apiCall<CharacterListType>(
		`${API_KEYS.FETCH_MARVEL_CHARACTER_LIST}?&orderBy=modified&series=24229,1058,2023?offset=${offset}&limit=${limit}`
	);
};
