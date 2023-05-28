type PaginationType = {
	offset: number;
	limit: number;
	total: number;
	count: number;
};

export default class Pagination {
	readonly offset;
	readonly limit;
	readonly total;
	readonly count;
	constructor(pagination: PaginationType) {
		this.offset = pagination.offset;
		this.limit = pagination.limit;
		this.total = pagination.total;
		this.count = pagination.count;
	}
}
