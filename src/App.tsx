import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			children: [
				{
					path: "home",
					element: <Homepage />,
				},
				{
					path: "product",
					element: <Product />,
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
