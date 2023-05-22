import { useState } from "react";

type InitialPagination = {
	initialOffset: number;
	initialLimit: number;
};

export default function usePagination({
	initialOffset = 10,
	initialLimit = 10,
}: InitialPagination) {
	const [offset, setOffset] = useState(initialOffset);
	const [limit, setLimit] = useState(initialLimit);

	return { offset, setOffset, limit, setLimit };
}
