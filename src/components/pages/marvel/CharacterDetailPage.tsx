import { Params, useParams } from "react-router-dom";

import { apiCall, API_KEYS } from "@api";
import { Pagination, Character } from "@types";

import CharacterDetailViewModel from "@viewModels/marvel/CharacterDetailViewModel";

export type CharacterList = { results: Character[] } & Pagination;

export default function CharacterDetailPage() {
	const params = useParams();

	return <CharacterDetailViewModel params={params} loader={loader} />;
}

export const loader = async ({ params }: { params: Params }) => {
	return apiCall<CharacterList>(API_KEYS.FETCH_MARVEL_CHARACTER_DETAIL + params.id);
};
