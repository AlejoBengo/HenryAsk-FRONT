import { Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchAllUsers } from "../../../app/Utils/allUsers";

export default function QuantityUsers() {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state: any) => state.allUser);
  const userRole = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return userRole.role <= 0 ? (
    <Paper sx={{ padding: "1rem", margin: "2rem" }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        display="flex"
        justifyContent="center"
      >
        {`+${users ? users.allUsers.length : null} usuarios se han sumado`}
      </Typography>
    </Paper>
  ) : null;
}
