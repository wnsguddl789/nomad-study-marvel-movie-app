import useCharacterListViewModel, { Stores } from "@marvel/viewModels/CharacterListViewModel/hooks";
import { CharacterListView } from "@marvel/views/CharacterListView";

type Props = {
	stores: Stores;
};

export default function CharacterListViewModel({ stores: characterListStore }: Props) {
	const { snapshots, stores, navigate } = useCharacterListViewModel(characterListStore);

	const { characterStore } = stores;
	const { characterStoreSnapshot } = snapshots;

	const pagination = characterStoreSnapshot.pagination;

	const fetchMoreCharacterList = async () => {
		characterStore.setCharacterListPagination({
			...pagination,
			offset: pagination.offset + 10,
			limit: pagination.limit + 10,
		});
		const { list: characterList } = await characterStore.fetchCharacterList();

		characterStore.setCharacterList(characterList);
	};

	return (
		<CharacterListView
			navigate={navigate}
			characterListData={characterStoreSnapshot.characterList}
			fetchMoreCharacterList={fetchMoreCharacterList}
		/>
	);
}
