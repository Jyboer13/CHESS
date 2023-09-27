import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
  tasks: any[] | null;
}

const initialState: TaskState = {
  tasks: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getTasksList: (state) => {
      // state.tasks += 1;
    },
  },
});

export const { getTasksList } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
