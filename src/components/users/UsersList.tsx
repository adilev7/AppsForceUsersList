import { List } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchUsers } from "../../store/usersSlice";
import UsersListItem from "./UsersListItem";
import UsersListSkeleton from "./UsersListSkeleton";

const UsersList = () => {
  const { users, isLoading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return error ? (
    <h1 className="UsersListError">{error}</h1>
  ) : (
    <List className="UsersList" sx={{ width: "100%" }}>
      {isLoading ? (
        <UsersListSkeleton />
      ) : (
        users.map((user) => <UsersListItem key={user.id} user={user} />)
      )}
    </List>
  );
};

export default UsersList;
