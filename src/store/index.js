import { configureStore } from "@reduxjs/toolkit";
import dashboardReducers from "./dashboard/dashboardReducers";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
});
