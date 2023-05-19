import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterSlice } from "./redux/filter/filter";

import { mailleSelectSlice } from "./redux/MailleSelect/mailleSelect";
import { mapStateSlice } from "./redux/mapState/mapState";

// Combine les reducers en un seul
const rootReducer = combineReducers({
	filter: filterSlice.reducer,
	mailleSelect: mailleSelectSlice.reducer,
	mapState: mapStateSlice.reducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
