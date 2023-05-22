import { Layout as AppContainer } from "@templates";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	CharacterDetailPage,
	characterDetailLoader,
	CharacterListPage,
	characterListLoader,
} from "@pages/marvel";

export default function RootApp() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <CharacterListPage />,
			loader: () => characterListLoader({ offset: 10, limit: 10 }),
		},
		{
			path: "/character/:id",
			element: <CharacterDetailPage />,
			loader: ({ params }) => characterDetailLoader({ params }),
		},
	]);

	return (
		<AppContainer>
			<RouterProvider router={router} />
		</AppContainer>
	);
}
