import { configureStore } from "@reduxjs/toolkit";

import Userreducer from "@/apps/auth/slicer";

const store = configureStore({
  reducer: {
    user: Userreducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
