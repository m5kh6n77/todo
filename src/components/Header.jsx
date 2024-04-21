import { Grid, Typography, Avatar } from "@mui/material";

const Header = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        padding="25px"
        border="solid"
        borderColor="#655F52"
        borderRadius="25px"
      >
        <Grid item xs={8}>
          <Typography variant="h5">Todo App</Typography>
          <Typography variant="h6">keep it up</Typography>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="end" alignItems="end">
          <Avatar
            sx={{ bgcolor: "#FF5631", height: "90px", width: "90px" }}
            aria-label="recipe"
          >
            Mohsen
          </Avatar>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
