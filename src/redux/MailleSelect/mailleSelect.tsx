import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ControleMaille } from "../../api/api.type";

interface MailleSelectState {
	value: { name: string; code: string; level: ControleMaille };
}
const initialState: MailleSelectState = {
	value: { name: "", code: "", level: ControleMaille.region },
};

export const mailleSelectSlice = createSlice({
	name: "mailleSelect",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<MailleSelectState>) => {
			state.value = action.payload;
		},
		remove: (state) => {
			state.value = { name: "", code: "", level: "" };
		},
	},
});

// Action creators are generated for each case reducer function
export const { add, remove } = mailleSelectSlice.actions;

export default mailleSelectSlice.reducer;
