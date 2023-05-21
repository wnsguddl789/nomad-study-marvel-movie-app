import { Layout as AppContainer } from "@templates";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CharacterDetailPage, {
	loader as characterDetailLoader,
} from "@pages/marvel/CharacterDetailPage";
import CharacterListPage, { loader as characterListLoader } from "@pages/marvel/CharacterListPage";

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
