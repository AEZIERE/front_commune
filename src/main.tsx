import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</PersistGate>
	</Provider>
);
