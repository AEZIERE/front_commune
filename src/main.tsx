import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./features/couter/App";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/other",
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
