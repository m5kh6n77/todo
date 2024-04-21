import { Box, Container, Stack, Grid } from "@mui/material";
import Item from "./components/Item";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { useSelector } from "react-redux";

export default function App() {
  const todoList = useSelector((state) => state.todos.value);

  return (
    <>
      <Container maxWidth="md" fixed style={{ color: "#0D0D0D" }}>
        <Box sx={{ bgcolor: "#ffffff", height: "100vh" }}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            padding="40px"
          >
            <Header />

            <AddTodo />

            <Grid container spacing={2} direction="column">
              {todoList.map((todo) => {
                return (
                  <Grid item xs key={todo.id}>
                    <Item
                      id={todo.id}
                      name={todo.name}
                      isChecked={todo.isChecked}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
