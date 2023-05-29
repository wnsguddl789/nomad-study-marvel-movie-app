import { apiClient, API_KEYS } from "@common/utils/api";

export default class CharacterService {
	private client = apiClient;

	public fetchCharacterList<Response>(offset: number, limit: number) {
		return this.client<Response>(
			`${API_KEYS.FETCH_MARVEL_CHARACTER_LIST}?&orderBy=modified&series=24229,1058,2023?offset=${offset}&limit=${limit}`
		);
	}
}
