import { Container } from "@mui/material";
import UsersList from "./components/users/UsersList/UsersList";
import UserFormModal from "./components/users/UserForm/UserFormModal";
import AppHeader from "./components/UI/AppHeader/AppHeader";
import CircularPlusButton from "./components/UI/Buttons/CircularPlusButton";
import { useAppDispatch } from "./hooks";
import { openModal } from "./store/modalSlice";
const App = () => {
  const dispatch = useAppDispatch();

  return (
    <div id="App">
      <AppHeader />
      <Container maxWidth="sm">
        <UsersList />

        <CircularPlusButton
          className="AddUserButton"
          onClick={() => dispatch(openModal())}
        />
      </Container>
      <UserFormModal />
    </div>
  );
};

export default App;
