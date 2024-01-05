import {
  Avatar,
  Card,
  CardContent,
  Link,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

import { User } from "@/types";
import { useAppDispatch } from "@/hooks";
import { openModal } from "@/store/modalSlice";
import { fillUserForm } from "@/store/userFormSlice";
import SecondaryButton from "../../UI/Buttons/SecondaryButton";
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import { Delete, Edit } from "@mui/icons-material";
import styles from "./UsersListItem.module.scss";
import { deleteUser } from "@/store/usersSlice";

const UsersListItem = (props: { user: User }) => {
  const dispatch = useAppDispatch();
  const editClickHandler = () => {
    dispatch(fillUserForm(user));
    dispatch(openModal());
  };
  const { user } = props;
  return (
    <ListItem alignItems="flex-start" className={styles.UsersListItem}>
      <Card className={styles["user-card"]}>
        <CardContent className={styles["user-card"]}>
          <Stack direction="row" alignItems="center" gap={3}>
            <Avatar
              alt={user.fullName || ""}
              src={user.picture || ""}
              className={styles.avatar}
            />
            <Stack className={styles["card-meta"]}>
              <Typography variant="h5" className={styles["meta-title"]}>
                {user.fullName}
              </Typography>
              <div className={styles["meta-text"]}>
                <Typography>
                  <Link href={`mailto:${user.email}`}>{user.email}</Link>
                </Typography>
                <Typography variant="subtitle1">{user.address}</Typography>
              </div>
            </Stack>
          </Stack>
          <Stack className={styles.actions} gap={1}>
            <PrimaryButton size="small" onClick={editClickHandler}>
              <Edit fontSize="small" />
            </PrimaryButton>
            <SecondaryButton
              size="small"
              variant="contained"
              onClick={() => dispatch(deleteUser(user.id!))}
            >
              <Delete fontSize="small" />
            </SecondaryButton>
          </Stack>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default UsersListItem;
