import { Container } from "@mui/material";
import UsersList from "./components/users/UsersList";
import UserModal from "./components/users/UserFormModal";
import AppHeader from "./components/UI/AppHeader";

const App = () => {
  return (
    <>
      <AppHeader />
      <Container>
        <UsersList />
        <UserModal />
      </Container>
    </>
  );
};

export default App;
