import Character from "./Character";

import Pagination from "@common/models/Pagination";
import { INITIAL_PAGINATION } from "@common/constants";

import { apiClient, API_KEYS } from "@common/utils/api";

export type ResponseCharacterList = { results: Character[] } & Pagination;

export default class CharacterList {
	list: Character[];
	pagination: Pagination;

	constructor({
		list = [],
		pagination = INITIAL_PAGINATION,
	}: { list?: Character[]; pagination?: Pagination } = {}) {
		this.list = list;
		this.pagination = pagination;
	}

	public getPagination(): Pagination {
		return this.pagination;
	}

	public setPagination(pagination: Pagination) {
		this.pagination = { ...this.pagination, ...pagination };
	}

	public getCharacterList(): Character[] {
		return this.list;
	}

	public async fetchCharacterList(): Promise<CharacterList> {
		const { offset, limit } = this.getPagination();

		const { results, ...pagination } = await apiClient<ResponseCharacterList>(
			`${API_KEYS.FETCH_MARVEL_CHARACTER_LIST}?&orderBy=modified&series=24229,1058,2023?offset=${offset}&limit=${limit}`
		);

		this.setPagination(pagination);

		return new CharacterList({
			list: results,
			pagination: this.getPagination(),
		});
	}
}
