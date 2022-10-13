import { axiosPublic } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  DesAccountNumbers,
  DesExUserData,
  DesIntialUserSlicer,
  DesLoginResponse,
  DesUser,
} from "../utils";

const sessionUser = JSON.parse(
  sessionStorage.getItem("user") || "{}"
) as DesUser;
const checkuser = sessionStorage.getItem("user") ? sessionUser : undefined;
const sessionaccessToken = sessionStorage.getItem("accessToken") as string;
const checkAccessToken = sessionStorage.getItem("accessToken")
  ? sessionaccessToken.toString()
  : "";

const sessionrefreshToken = sessionStorage.getItem("refreshToken") as string;
const checkRefresToken = sessionStorage.getItem("refreshToken")
  ? sessionrefreshToken.toString()
  : "";

const initialState: DesIntialUserSlicer = {
  existingEmails: [],
  accountNumbers: [],
  user: checkuser,
  refreshToken: checkRefresToken,
  accessToken: checkAccessToken,
};

export const getExistingdata = createAsyncThunk(
  "user/getExistingdata",
  async (wk: boolean, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.get<DesExUserData>(
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
    logDesUser: (state, { payload }: PayloadAction<DesLoginResponse>) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.user = payload.user;
      sessionStorage.setItem("user", JSON.stringify(payload.user));
      sessionStorage.setItem("refreshToken", payload.refreshToken);
      sessionStorage.setItem("accessToken", payload.accessToken);
    },
    updateUser: (state, { payload }: PayloadAction<DesUser>) => {
      sessionStorage.removeItem("user");
      state.user = payload;
      sessionStorage.setItem("user", JSON.stringify(payload));
    },
    resetUser: (state) => {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");

      state.user = undefined;
      state.refreshToken = "";
      state.accessToken = "";
    },
    updateAccess: (state, { payload }: PayloadAction<string>) => {
      sessionStorage.removeItem("accessToken");
      sessionStorage.setItem("accessToken", payload);
      state.accessToken = payload;
    },
    updateAccounNumbers: (
      state,
      { payload }: PayloadAction<DesAccountNumbers>
    ) => {
      state.accountNumbers = payload.accountNumbers;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getExistingdata.fulfilled,
      (state, action: PayloadAction<DesExUserData>) => {
        state.existingEmails = action.payload.existingEmails;
      }
    );
    builder.addCase(getExistingdata.rejected, (state) => {
      state.existingEmails = [];
    });
  },
});

export const {
  logDesUser,
  updateUser,
  resetUser,
  updateAccess,
  updateAccounNumbers,
} = userSlicer.actions;
export default userSlicer.reducer;
