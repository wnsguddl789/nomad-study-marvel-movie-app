import { Suspense } from "react";
import { Params, useParams } from "react-router-dom";

import { apiCall, API_KEYS } from "@common/utils/api";

import CharacterDetailViewModel from "@marvel/viewModels/CharacterDetailViewModel";
import { CharacterListType } from "@marvel/types/CharacterList.type";

import { Typography } from "@atoms";

export default function CharacterDetailPage() {
	const params = useParams();

	return (
		<Suspense fallback={<Typography>Loading...</Typography>}>
			<CharacterDetailViewModel params={params} loader={characterDetailLoader} />
		</Suspense>
	);
}

export const characterDetailLoader = async ({ params }: { params: Params }) => {
	return apiCall<CharacterListType>(API_KEYS.FETCH_MARVEL_CHARACTER_DETAIL + params.id);
};
