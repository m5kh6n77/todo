import { Delete } from "@mui/icons-material";
import { Stack, Typography, Checkbox, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo, updateChecked } from "../Data/TodoSlice";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Item = ({ id, name, isChecked }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        padding="12px"
        border="solid"
        borderColor="#655F52"
        borderRadius="15px"
      >
        <Stack alignItems="center" justifyContent="center" direction="row">
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6" ml={5}>
            {isChecked ? "Bookmarked" : "Not Bookmarked"}
          </Typography>
        </Stack>

        <Stack alignItems="center" justifyContent="center" direction="row">
          <Checkbox
            inputProps={{ "aria-label": "controlled" }}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={isChecked}
            onChange={(event) => {
              dispatch(updateChecked({ id, isChecked: event.target.checked }));
            }}
          />
          <IconButton
            onClick={() => {
              dispatch(deleteTodo({ id }));
            }}
          >
            <Delete />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default Item;
