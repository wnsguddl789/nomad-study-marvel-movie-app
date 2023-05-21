import React from "react";
import ReactDOM from "react-dom/client";
import RootApp from "./App";

import "./styles/reset.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RootApp />
	</React.StrictMode>
);
