import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChoixFilter from "./pages/ChoixFilter";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <ChoixFilter />,
			children: [
				{
					path: "home",
					element: <ChoixFilter />,
				},
			],
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
