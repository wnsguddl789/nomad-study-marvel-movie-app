import Store from "@core/Store";

import Character from "@marvel/models/Character";
import CharacterModel from "@marvel/models/CharacterModel";

import Pagination from "@common/models/Pagination";
import PaginationModel from "@common/models/PaginationModel";

export type CharacterSnapshot = {
	characterList: Character[];
	pagination: Pagination;
};

export default class CharacterStore extends Store<CharacterSnapshot> {
	private characterModel = new CharacterModel();
	private paginationModel = new PaginationModel();

	constructor() {
		super();
		this.takeSnapshot();
	}

	public takeSnapshot(): void {
		this.snapShot = {
			characterList: this.characterModel.characterList,
			pagination: this.paginationModel.pagination,
		};
	}

	update(): void {
		this.takeSnapshot();
		this.publish();
	}

	public updateCharacterList(characterList: Character[]): void {
		this.characterModel.updateCharacterList(characterList);
	}

	public updatePagination(pagination: Pagination) {
		this.paginationModel.updatePagination(pagination);
	}

	public async fetchCharacterList(offset: number, limit: number): Promise<void> {
		const { characterList, pagination } = await this.characterModel.fetchCharacterList(
			offset,
			limit
		);

		this.updateCharacterList(characterList);
		this.updatePagination(pagination);

		this.update();
	}
}
