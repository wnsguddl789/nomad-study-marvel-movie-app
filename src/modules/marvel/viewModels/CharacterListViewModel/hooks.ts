import { useNavigate } from "react-router-dom";

import CharacterStore, { CharacterSnapshot } from "@marvel/store/CharacterStore";
import useStore from "@core/hooks/useStore";

export type Stores = {
	characterStore: CharacterStore;
};

const useCharacterListViewModel = (stores: Stores) => {
	const navigate = useNavigate();
	const [characterStoreSnapshot, characterStore] = useStore<CharacterSnapshot>(
		stores.characterStore
	);

	return {
		snapshots: { characterStoreSnapshot },
		stores: { characterStore },
		navigate,
	};
};

export default useCharacterListViewModel;
