/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Owner, User } from "../../app/interface";
import { Link } from "react-router-dom";
import { getUserById, userTemplate } from "../../app/Utils/userUtilities";
/*-----------IMPORT MUI & CSS-----------*/
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Avatar, Link as MUILink, Typography } from "@mui/material";
/*--------------------------------------------------------*/
interface Props {
  user: Owner;
}
export const UserShort = ({ user }: Props) => {
  return (
    <Typography display={"flex"} variant="caption" alignItems="center">
      <Avatar
        sx={{
          width: "40px",
          height: "40px",
          display: "inline",
          mx: 1,
          zIndex: 2,
          border: "1px solid",
          borderColor: "primary.dark",
          ["&:before"]: {
            zIndex: -1,
            content: "''",
            display: "block",
            backgroundColor: "primary.light",
            width: "40px",
            height: "40px",
            position: "absolute",
          },
        }}
        src={user?.profile_picture.length>0? user.profile_picture : user.avatar.length>0? user.avatar : user.profile_picture}
      />
      <MUILink href={`/Profile/${user._id}`}>{user?.user_name}</MUILink>
    </Typography>
  );
};
