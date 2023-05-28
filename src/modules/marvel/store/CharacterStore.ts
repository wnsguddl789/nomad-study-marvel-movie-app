import Store from "@core/Store";

import Character from "@marvel/models/Character";
import CharacterList from "@marvel/models/CharacterList";

import Pagination from "@common/models/Pagination";
import { INITIAL_PAGINATION } from "@common/constants";

export type CharacterSnapshot = {
	characterList: Character[];
	pagination: Pagination;
};

export default class CharacterStore extends Store<CharacterSnapshot> {
	private characterList = new CharacterList();
	private pagination = new Pagination(INITIAL_PAGINATION);

	constructor() {
		super();
		this.takeSnapshot();
	}

	public setCharacterList(characterList: Character[]) {
		this.characterList.list = characterList;
		this.update();
	}

	public setCharacterListPagination(pagination: Pagination): void {
		return this.characterList.setPagination(pagination);
	}

	public fetchCharacterList(): Promise<CharacterList> {
		return this.characterList.fetchCharacterList();
	}

	public takeSnapshot() {
		this.snapShot = {
			characterList: this.characterList.list,
			pagination: this.pagination,
		};
	}

	update() {
		this.takeSnapshot();
		this.publish();
	}
}
