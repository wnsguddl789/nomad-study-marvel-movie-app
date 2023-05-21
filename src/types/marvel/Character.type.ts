type Comic = {
	available: number;
	collectionURI: string;
	items: {
		name: string;
		resourceURI: string;
	}[];
	returned: number;
};
type Event = {
	available: number;
	collectionURI: string;
	items: {
		name: string;
		resourceURI: string;
	}[];
	returned: number;
};
type Series = {
	available: number;
	collectionURI: string;
	items: {
		name: string;
		resourceURI: string;
	}[];
	returned: number;
};
type Story = {
	available: number;
	collectionURI: string;
	items: {
		name: string;
		resourceURI: string;
	}[];
	returned: number;
};

export type Character = {
	id: number;
	name: string;
	modified: string;
	description: string;
	resourceURI: string;
	comics: Comic;
	events: Event;
	series: Series;
	stories: Story;
	thumbnail: {
		extension: string;
		path: string;
	};
	urls: {
		type: string;
		url: string;
	}[];
};
