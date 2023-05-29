import Character from "./Character";

import Pagination from "@common/models/Pagination";

import CharacterService from "../services/CharacterService";

export type CharacterList = { results: Character[] } & Pagination;

type Response = {
	characterList: Character[];
	pagination: Pagination;
};

const INITIAL_VALUE = { characterList: [] };

export default class CharacterModel {
	private service: CharacterService = new CharacterService();
	characterList: Character[];

	constructor({ characterList }: { characterList: Character[] } = INITIAL_VALUE) {
		this.characterList = characterList;
	}

	public updateCharacterList(characterList: Character[]): void {
		this.characterList = characterList;
	}

	public async fetchCharacterList(offset: number, limit: number): Promise<Response> {
		const { results, ...pagination } = await this.service.fetchCharacterList<CharacterList>(
			offset,
			limit
		);

		const { characterList } = new CharacterModel({ characterList: results });

		return { characterList, pagination };
	}
}
