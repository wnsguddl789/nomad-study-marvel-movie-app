import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useLoaderData } from "react-router-dom";

export default function useInitialLoaderData<T>(
	loader: () => Promise<T>
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
	const loaderData = useLoaderData() as Awaited<ReturnType<typeof loader>>;
	const [data, setData] = useState<T | undefined>();

	useEffect(() => {
		setData(loaderData);
	}, [loaderData]);

	return [data, setData];
}
