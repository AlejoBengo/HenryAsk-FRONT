import axios from "axios";
import React, { useEffect, useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { User } from "../../app/interface";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import { getUserById, userTemplate } from "../../app/Utils/userUtilities";

interface Props {
  id: string;
}
export const UserShort = ({ id }: Props) => {
  const [user, setUser] = useState(userTemplate);
  useEffect(() => {
    if (!user.first_name) {
      getUserById(id).then((user) => {
        setUser(user);
      });
    }
  }, [user]);

  return (
    <span>
      <MUILink href={`/Profile/${id}`}>{user?.user_name}</MUILink>
      <AccountCircleRoundedIcon />
    </span>
  );
};
