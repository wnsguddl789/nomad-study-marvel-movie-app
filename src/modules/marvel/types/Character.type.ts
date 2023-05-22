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

export type { CharacterType };
