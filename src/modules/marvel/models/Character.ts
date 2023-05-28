type Item = { name: string; resourceURI: string };

type Comic = {
	available: number;
	collectionURI: string;
	returned: number;
	items: Item[];
};
type Event = {
	available: number;
	collectionURI: string;
	returned: number;
	items: Item[];
};
type Series = {
	available: number;
	collectionURI: string;
	returned: number;
	items: Item[];
};
type Story = {
	available: number;
	collectionURI: string;
	returned: number;
	items: Item[];
};

type Thumbnail = { extension: string; path: string };

type Url = { type: string; url: string };

type CharacterType = {
	id: number;
	name: string;
	modified: string;
	description: string;
	resourceURI: string;
	comics: Comic;
	events: Event;
	series: Series;
	stories: Story;
	thumbnail: Thumbnail;
	urls: Url[];
};

export default class Character {
	readonly id;
	readonly name;
	readonly modified;
	readonly description;
	readonly resourceURI;
	readonly comics;
	readonly events;
	readonly series;
	readonly stories;
	readonly thumbnail;
	readonly urls;

	constructor(character: CharacterType) {
		this.id = character.id;
		this.name = character.name;
		this.modified = character.modified;
		this.description = character.description;
		this.resourceURI = character.resourceURI;
		this.comics = character.comics;
		this.events = character.events;
		this.series = character.series;
		this.stories = character.stories;
		this.thumbnail = character.thumbnail;
		this.urls = character.urls;
	}
}
