import { List } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { fetchUsers } from "@/store/usersSlice";
import UsersListItem from "../UsersListItem/UsersListItem";
import UsersListSkeleton from "./UsersListSkeleton";
import styles from "./UsersList.module.scss";

const UsersList = () => {
  const { users, isLoading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return error ? (
    <h1 className="UsersListError">{error}</h1>
  ) : (
    <List className={styles.UsersList} sx={{ width: "100%" }}>
      {isLoading ? (
        <UsersListSkeleton />
      ) : (
        users.map((user) => <UsersListItem key={user.id} user={user} />)
      )}
    </List>
  );
};

export default UsersList;
