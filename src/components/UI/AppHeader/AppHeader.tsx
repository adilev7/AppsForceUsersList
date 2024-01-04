import { AppBar, Toolbar, Typography } from "@mui/material";
import { APP_NAME } from "@/constants";
import classes from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar className={classes["text-wrap"]}>
          <Typography variant="h4">{APP_NAME}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default AppHeader;
