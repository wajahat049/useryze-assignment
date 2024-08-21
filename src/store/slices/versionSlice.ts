import { createSlice } from "@reduxjs/toolkit";
import versionConfig from "../../config.json";

interface VersionState {
  version: string | null;
}

const initialState: VersionState = {
  version: null,
};

const versionSlice = createSlice({
  name: "version",
  initialState,
  reducers: {
    setVersion: (state) => {
      const randNum = Math.random();
      console.log(
        "Version random number: " + randNum,
        randNum >= 0.5 ? "A" : "B",
        state.version
      );
      if (versionConfig.defaultVersion) {
        state.version = versionConfig.defaultVersion;
      } else {
        if (!state.version) {
          state.version = randNum >= 0.5 ? "A" : "B";
        }
      }
    },
  },
});

export const { setVersion } = versionSlice.actions;

export default versionSlice.reducer;
