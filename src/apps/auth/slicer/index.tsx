import { axiosPublic } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { INExUserData, INIntialUserSlicer } from "../utils";

const initialState: INIntialUserSlicer = {
  existingEmails: [],
};

export const getExistingdata = createAsyncThunk(
  "user/getExistingdata",
  async (wk: boolean, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.get<INExUserData>(
        "/available-user-details/"
      );
      return data;
    } catch (error) {
      let err = error as AxiosError;
      console.log(error);
      return rejectWithValue(err.message);
    }
  }
);

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getExistingdata.fulfilled,
      (state, action: PayloadAction<INExUserData>) => {
        state.existingEmails = action.payload.existingEmails;
      }
    );
    builder.addCase(getExistingdata.rejected, (state) => {
      state.existingEmails = [];
    });
  },
});

// export const { logout, upDateUser } = userSlicer.actions;
export default userSlicer.reducer;
