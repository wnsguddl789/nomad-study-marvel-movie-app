import { Suspense, useMemo } from "react";

import CharacterListViewModel from "@marvel/viewModels/CharacterListViewModel";
import CharacterStore from "@marvel/store/CharacterStore";

import { INITIAL_PAGINATION } from "@/modules/common/constants";

import { Typography } from "@atoms";

const characterStore = new CharacterStore();

export default function CharacterListPage() {
	const RootStore = useMemo(() => ({ characterStore }), []);
	return (
		<Suspense fallback={<Typography>Loading...</Typography>}>
			<CharacterListViewModel stores={RootStore} />
		</Suspense>
	);
}

export const characterListLoader = async () => {
	const { offset, limit } = INITIAL_PAGINATION;

	await characterStore.fetchCharacterList(offset, limit);

	const { characterList } = characterStore.getSnapShot();

	return characterList;
};
