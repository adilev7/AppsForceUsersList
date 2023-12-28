import { Container, Typography } from "@mui/material";
import UsersList from "./components/users/UsersList";
import UserModal from "./components/users/UserFormModal";

const App = () => {
  return (
    <Container>
      <Typography variant="h1">Hello World!</Typography>
      <UsersList />
      <UserModal />
    </Container>
  );
};

export default App;
