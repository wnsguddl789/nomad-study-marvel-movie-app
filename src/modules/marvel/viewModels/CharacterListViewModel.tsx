import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { usePagination, useInitialLoaderData, useIntersectionObserver } from "@common/hooks";

import { CharacterListType } from "@marvel/types/CharacterList.type";
import { CharacterListView } from "@marvel/views/CharacterListView";

import { characterListLoader } from "@pages/marvel/CharacterListPage";

export default function CharacterListViewModel() {
	const navigate = useNavigate();
	const { offset, setOffset, limit, setLimit } = usePagination({
		initialOffset: 10,
		initialLimit: 10,
	});

	const fetchCharacterList = () => characterListLoader({ offset, limit });

	const [characterList, setCharacterList] =
		useInitialLoaderData<CharacterListType>(fetchCharacterList);

	const fetchMoreCharacterList = async () => {
		const characterList = await characterListLoader({ offset: offset + 10, limit: limit + 10 });

		setOffset((prevOffset) => prevOffset + 10);
		setLimit((prevLimit) => prevLimit + 10);

		setCharacterList(characterList);
	};

	const ref = useRef<HTMLUListElement | null>(null);
	const entry = useIntersectionObserver(ref, {});
	const isIntersecting = entry?.isIntersecting;

	return (
		<CharacterListView
			ref={ref}
			navigate={navigate}
			characterListData={characterList}
			fetchMoreCharacterList={fetchMoreCharacterList}
		/>
	);
}
