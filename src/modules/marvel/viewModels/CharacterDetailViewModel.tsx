import { useInitialLoaderData } from "@/modules/common/hooks";
import { useNavigate, Params } from "react-router-dom";

import { CharacterListType } from "@marvel/types/CharacterList.type";

import { CharacterDetailView } from "@marvel/views/CharacterDetailView";
import { characterDetailLoader } from "@pages/marvel";

type Props = {
	params: Params;
};

export default function CharacterDetailViewModel({ params }: Props) {
	const navigate = useNavigate();

	const fetchCharacterDetail = () => characterDetailLoader({ params });
	const [characterDetail] = useInitialLoaderData<CharacterListType>(fetchCharacterDetail);

	const characterDetailData = characterDetail?.results.at(0);

	return (
		<CharacterDetailView
			characterDetailData={characterDetailData}
			navigateToCharacterListPage={() => navigate("/")}
		/>
	);
}
