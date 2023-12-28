import { AppBar, Toolbar, Typography } from "@mui/material";
import { APP_NAME } from "./constants";

const AppHeader = () => {
  return (
    <>
      <AppBar position="fixed" className="AppBar">
        <Toolbar>
          <Typography variant="h4">{APP_NAME}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default AppHeader;
