export default abstract class Store<Snapshot> {
	protected listeners = new Set<() => void>();

	protected snapShot = {} as Snapshot;

	public addListener(listener: () => void) {
		this.listeners.add(listener);
	}

	public removerListener(listener: () => void) {
		this.listeners.delete(listener);
	}

	public getSnapShot() {
		return this.snapShot;
	}

	public publish() {
		this.listeners.forEach((listener) => listener());
	}
}
