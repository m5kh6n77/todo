import { AddCircleRounded } from "@mui/icons-material";
import { Stack, TextField, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Data/TodoSlice";
import { useState } from "react";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.value);
  const [todoName, setTodoName] = useState("");
  return (
    <>
      <Stack
        direction="row"
        flexWrap="nowrap"
        alignItems="center"
        style={{ width: "100%" }}
      >
        <TextField
          id="outlined-basic"
          label="Add Todo Item"
          variant="outlined"
          style={{ width: "100%" }}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          size="large"
          onClick={() => {
            dispatch(
              addTodo({
                id: todoList[todoList.length - 1].id + 1,
                name: todoName,
                isChecked: false,
              })
            );
          }}
        >
          <AddCircleRounded
            style={{ width: "50px", height: "50px" }}
            sx={{ color: "#FF5631" }}
          />
        </IconButton>
      </Stack>
    </>
  );
};

export default AddTodo;
