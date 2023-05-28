import { Suspense, useMemo } from "react";

import CharacterListViewModel from "@/modules/marvel/viewModels/CharacterListViewModel";

import CharacterStore from "@marvel/store/CharacterStore";

import { Typography } from "@atoms";

const characterStore = new CharacterStore();

export default function CharacterListPage() {
	const stores = useMemo(() => ({ characterStore }), []);
	return (
		<Suspense fallback={<Typography>Loading...</Typography>}>
			<CharacterListViewModel stores={stores} />
		</Suspense>
	);
}

export const characterListLoader = async () => {
	const { list: characterList } = await characterStore.fetchCharacterList();

	characterStore.setCharacterList(characterList);

	return characterList;
};
