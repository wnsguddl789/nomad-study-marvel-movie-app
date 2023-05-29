import Pagination from "./Pagination";
import { INITIAL_PAGINATION } from "@common/constants";

const INITIAL_VALUE = { pagination: INITIAL_PAGINATION };

export default class PaginationModel {
	pagination: Pagination;

	constructor({ pagination }: { pagination: Pagination } = INITIAL_VALUE) {
		this.pagination = pagination;
	}

	public updatePagination(pagination: Pagination): void {
		this.pagination = pagination;
	}
}
