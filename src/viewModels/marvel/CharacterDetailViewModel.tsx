import { useInitialLoaderData } from "@hooks";
import { useNavigate, Params } from "react-router-dom";

import type { CharacterList } from "@pages/marvel/CharacterDetailPage";

import { CharacterDetailView } from "@views/marvel/CharacterDetailView";

type Props = {
	params: Params;
	loader: ({ params }: { params: Params }) => Promise<CharacterList>;
};

export default function CharacterDetailViewModel({ params, loader }: Props) {
	const navigate = useNavigate();
	const [characterDetail] = useInitialLoaderData<CharacterList>(() => loader({ params }));

	const characterDetailData = characterDetail?.results.at(0);

	return (
		<CharacterDetailView
			characterDetailData={characterDetailData}
			navigateToCharacterListPage={() => navigate("/")}
		/>
	);
}
