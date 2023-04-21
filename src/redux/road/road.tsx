import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
	value: string[];
}
const initialState: FilterState = {
	value: [],
};

export const roadSlice = createSlice({
	name: "road",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<string>) => {
			state.value.push(action.payload);
		},
		remove_all_last: (state, action: PayloadAction<string>) => {
			state.value.splice(state.value.indexOf(action.payload), state.value.length - state.value.indexOf(action.payload));
		},
		remove_one_last: (state) => {
			state.value.pop();
		},
	},
});

// Action creators are generated for each case reducer function
export const { add, remove_one_last, remove_all_last } = roadSlice.actions;

export default roadSlice.reducer;
