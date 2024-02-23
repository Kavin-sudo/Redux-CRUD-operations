import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Silces/TaskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
