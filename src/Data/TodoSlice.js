import { createSlice } from "@reduxjs/toolkit";
import { TodoData } from "./TodoData";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { value: TodoData },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
    updateChecked: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isChecked = action.payload.isChecked;
        }
      });
    },
  },
});

export const TodoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, updateChecked } = todoSlice.actions;
