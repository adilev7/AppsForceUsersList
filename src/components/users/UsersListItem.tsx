import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

import { User } from "../../types";
import { useAppDispatch } from "../../hooks";
import { openModal } from "../../store/modalSlice";
import { fillUserForm } from "../../store/userFormSlice";

const UsersListItem = (props: { user: User }) => {
  const dispatch = useAppDispatch();
  const editClickHandler = () => {
    dispatch(fillUserForm(user));
    dispatch(openModal());
  };
  const { user } = props;
  return (
    <ListItem alignItems="flex-start" className="UsersListItem">
      <Card sx={{ width: 500, maxWidth: "100%", minWidth: "50%" }}>
        <CardContent>
          <Stack direction="row" gap={5}>
            <Avatar
              alt={user.fullName || ""}
              src={user.picture || ""}
              sx={{ width: 80, height: 80 }}
            />
            <Stack>
              <Typography variant="h5">{user.fullName}</Typography>
              <Typography>
                <Link href={`mailto:${user.email}`}>{user.email}</Link>
              </Typography>
              <Typography variant="subtitle1">{user.address}</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="error" size="small">
            Delete
          </Button>
          <Button variant="contained" size="small" onClick={editClickHandler}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </ListItem>
  );
};

export default UsersListItem;
