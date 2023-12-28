import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import UsersList from "./components/users/UsersList";
import UserModal from "./components/users/UserFormModal";
import { APP_NAME } from "./constants";

const App = () => {
  return (
    <>
      <AppBar position="fixed" className="AppBar">
        <Toolbar>
          <Typography variant="h4">{APP_NAME}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <UsersList />
        <UserModal />
      </Container>
    </>
  );
};

export default App;
