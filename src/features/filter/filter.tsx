import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
	value: string;
}
const initialState: FilterState = {
	value: "",
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
		remove: (state) => {
			state.value = "";
		},
	},
});

// Action creators are generated for each case reducer function
export const { add, remove } = filterSlice.actions;

export default filterSlice.reducer;
