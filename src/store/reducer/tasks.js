import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    CREATE_Task(state, { payload }) {
      state = state.push(payload);
    },
    UPDATE_TASK(state, { payload }) {
      state = state[payload.key] = payload.data;
    },
    REMOVE_TASK(state, { payload }) {
      state = state.splice(payload, 1);
    },
    UPDATE_TASK_STATUS(state, { payload }) {
      state = state[payload.key]["status"] = payload.data;
    },
  },
});

export const {
  CREATE_Task,
  UPDATE_TASK,
  REMOVE_TASK,
  UPDATE_TASK_STATUS,
  SORT_FILTER,
} = taskSlice.actions;

export default taskSlice.reducer;
