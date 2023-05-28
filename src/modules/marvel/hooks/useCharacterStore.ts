import { useSyncExternalStore } from "react";
import CharacterStore, { CharacterSnapshot } from "../store/CharacterStore";

export default function useCharacterStore(
	characterStore: CharacterStore
): [CharacterSnapshot, CharacterStore] {
	const snapshot = useSyncExternalStore(
		(onStoreChange) => {
			characterStore.addListener(onStoreChange);
			return () => characterStore.removerListener(onStoreChange);
		},
		() => characterStore.getSnapShot()
	);

	return [snapshot, characterStore];
}
