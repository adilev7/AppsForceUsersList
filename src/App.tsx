import { Container } from "@mui/material";
import UsersList from "./components/users/UsersList";
import UserModal from "./components/users/UserFormModal";

const App = () => {
  return (
    <Container>
      <UsersList />
      <UserModal />
    </Container>
  );
};

export default App;
