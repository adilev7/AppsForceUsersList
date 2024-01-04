import { List, ListItem, Skeleton, Stack } from "@mui/material";

const UsersListSkeleton = () => {
  return (
    <List className="UsersListSkeleton" sx={{ width: "100%" }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <ListItem key={i}>
          <Skeleton
            variant="circular"
            animation="wave"
            sx={{ width: 80, height: 80 }}
          ></Skeleton>
          <Stack>
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: 200 }}
            ></Skeleton>
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ width: 200 }}
            ></Skeleton>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};

export default UsersListSkeleton;
