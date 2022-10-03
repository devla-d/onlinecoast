import { axiosPublic } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  INExUserData,
  INIntialUserSlicer,
  INLOGINRESPONSE,
  INUSER,
} from "../utils";

const sessionUser = JSON.parse(
  sessionStorage.getItem("user") || "{}"
) as INUSER;
const checkuser = sessionStorage.getItem("user") ? sessionUser : undefined;
const sessionaccessToken = sessionStorage.getItem("accessToken") as string;
const checkAccessToken = sessionStorage.getItem("accessToken")
  ? sessionaccessToken.toString()
  : "";

const sessionrefreshToken = sessionStorage.getItem("refreshToken") as string;
const checkRefresToken = sessionStorage.getItem("refreshToken")
  ? sessionrefreshToken.toString()
  : "";

const initialState: INIntialUserSlicer = {
  existingEmails: [],
  user: checkuser,
  refreshToken: checkRefresToken,
  accessToken: checkAccessToken,
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
  reducers: {
    loginUser: (state, { payload }: PayloadAction<INLOGINRESPONSE>) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.user = payload.user;
      sessionStorage.setItem("user", JSON.stringify(payload.user));
      sessionStorage.setItem("refreshToken", payload.refreshToken);
      sessionStorage.setItem("accessToken", payload.accessToken);
    },
    updateUser: (state, { payload }: PayloadAction<INUSER>) => {
      sessionStorage.removeItem("user");
      state.user = payload;
      sessionStorage.setItem("user", JSON.stringify(payload));
    },
  },
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

export const { loginUser, updateUser } = userSlicer.actions;
export default userSlicer.reducer;
