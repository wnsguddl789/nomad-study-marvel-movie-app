import Character from "./Character";

const INITIAL_VALUE = { characterList: [] };

export default class CharacterModel {
	characterList: Character[];

	constructor({ characterList }: { characterList: Character[] } = INITIAL_VALUE) {
		this.characterList = characterList;
	}

	public updateCharacterList(characterList: Character[]): void {
		this.characterList = characterList;
	}
}
