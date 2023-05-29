import Store from "@core/Store";

import Character from "@marvel/models/Character";
import CharacterModel from "@marvel/models/CharacterModel";

import CharacterService from "@marvel/services/CharacterService";

import Pagination from "@common/models/Pagination";
import PaginationModel from "@common/models/PaginationModel";

export type PagedCharacterList = { results: Character[] } & Pagination;

export type CharacterSnapshot = {
	characterList: Character[];
	pagination: Pagination;
};

export default class CharacterStore extends Store<CharacterSnapshot> {
	private characterModel = new CharacterModel();
	private paginationModel = new PaginationModel();

	private service: CharacterService = new CharacterService();

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
		const { results, ...pagination } =
			await this.service.fetchCharacterList<PagedCharacterList>(offset, limit);

		const { characterList } = new CharacterModel({ characterList: results });

		this.updateCharacterList(characterList);
		this.updatePagination(pagination);

		this.update();
	}
}
