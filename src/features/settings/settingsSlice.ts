import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsSliceState {
  gender: string;
  darkMode: number;
}

const initialState: SettingsSliceState = {
  gender: "M",
  darkMode: 0,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setGender(state: SettingsSliceState, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.gender = action.payload;
    },
    setDarkMode(state: SettingsSliceState, action: PayloadAction<number>) {
      // eslint-disable-next-line no-param-reassign
      state.darkMode = action.payload;
    },
  },
});

export const { setGender, setDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
