import { useNavigate } from "react-router-dom";

import CharacterStore from "@marvel/store/CharacterStore";
import { useCharacterStore } from "@marvel/hooks";

export type Stores = {
	characterStore: CharacterStore;
};

const useCharacterListViewModel = (stores: Stores) => {
	const navigate = useNavigate();
	const [characterStoreSnapshot, characterStore] = useCharacterStore(stores.characterStore);

	return {
		snapshots: { characterStoreSnapshot },
		stores: { characterStore },
		navigate,
	};
};

export default useCharacterListViewModel;
