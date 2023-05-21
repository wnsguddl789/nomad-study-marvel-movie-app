import { useNavigate } from "react-router-dom";
import { usePagination, useInitialLoaderData } from "@hooks";

import type { CharacterList } from "@pages/marvel/CharacterListPage";
import { loader as fetchCharacterList } from "@pages/marvel/CharacterListPage";

import { CharacterListView } from "@views/marvel/CharacterListView";

export default function CharacterListViewModel() {
	const navigate = useNavigate();
	const { offset, setOffset, limit, setLimit } = usePagination({
		initialOffset: 10,
		initialLimit: 10,
	});
	const [characterList, setCharacterList] = useInitialLoaderData<CharacterList>(() =>
		fetchCharacterList({ offset, limit })
	);

	const fetchMoreCharacterList = async () => {
		const characterList = await fetchCharacterList({ offset: offset + 10, limit: limit + 10 });

		setOffset((prevOffset) => prevOffset + 10);
		setLimit((prevLimit) => prevLimit + 10);

		setCharacterList(characterList);
	};

	return (
		<CharacterListView
			navigate={navigate}
			characterListData={characterList}
			fetchMoreCharacterList={fetchMoreCharacterList}
		/>
	);
}
