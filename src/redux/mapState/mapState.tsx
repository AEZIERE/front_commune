import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ControleMaille } from "../../api/api.type";

const initialState = {
	selectedZone: { name: "", code: "", level: ControleMaille.nation },
	currentZone: { name: "", code: "", level: ControleMaille.nation },
};

export const mapStateSlice = createSlice({
	name: "mapState",
	initialState,
	reducers: {
		setSelectedZone: (state, action: PayloadAction<{ name: string; code: string; level: ControleMaille }>) => {
			state.selectedZone = action.payload;
		},
		setCurrentZone: (state, action: PayloadAction<{ name: string; code: string; level: ControleMaille }>) => {
			state.currentZone = action.payload;
		}
	},
});

// Action creators are generated for each case reducer function
export const {} = mapStateSlice.actions;

export default mapStateSlice.reducer;
