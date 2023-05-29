import useCharacterListViewModel, { Stores } from "@marvel/viewModels/CharacterListViewModel/hooks";
import { CharacterListView } from "@marvel/views/CharacterListView";

type Props = {
	stores: Stores;
};

export default function CharacterListViewModel({ stores: characterListStore }: Props) {
	const { snapshots, stores, navigate } = useCharacterListViewModel(characterListStore);

	const { characterStore } = stores;
	const { characterStoreSnapshot } = snapshots;

	const { offset, limit } = characterStoreSnapshot.pagination;

	const fetchMoreCharacterList = async () => {
		await characterStore.fetchCharacterList(offset + 10, limit + 10);
	};

	return (
		<CharacterListView
			navigate={navigate}
			characterListData={characterStoreSnapshot.characterList}
			fetchMoreCharacterList={fetchMoreCharacterList}
		/>
	);
}
