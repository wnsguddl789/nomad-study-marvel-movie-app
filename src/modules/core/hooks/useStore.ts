import { useSyncExternalStore } from "react";
import Store from "@core/Store";

export default function useStore<SnapShot>(store: Store<SnapShot>): [SnapShot, Store<SnapShot>] {
	const snapshot = useSyncExternalStore(
		(onStoreChange) => {
			store.addListener(onStoreChange);
			return () => store.removerListener(onStoreChange);
		},
		() => store.getSnapShot()
	);

	return [snapshot, store];
}
