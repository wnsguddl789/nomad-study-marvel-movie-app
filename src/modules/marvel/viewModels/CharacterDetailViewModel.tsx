import { useInitialLoaderData } from "@/modules/common/hooks";
import { useNavigate, Params } from "react-router-dom";

import { CharacterListType } from "@marvel/types/CharacterList.type";

import { CharacterDetailView } from "@marvel/views/CharacterDetailView";

type Props = {
	params: Params;
	loader: ({ params }: { params: Params }) => Promise<CharacterListType>;
};

export default function CharacterDetailViewModel({ params, loader }: Props) {
	const navigate = useNavigate();
	const [characterDetail] = useInitialLoaderData<CharacterListType>(() => loader({ params }));

	const characterDetailData = characterDetail?.results.at(0);

	return (
		<CharacterDetailView
			characterDetailData={characterDetailData}
			navigateToCharacterListPage={() => navigate("/")}
		/>
	);
}
