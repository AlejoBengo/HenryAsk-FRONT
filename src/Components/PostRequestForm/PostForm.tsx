import { useAuth0 } from "@auth0/auth0-react";
import {
  Grid,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { TextEditor } from "../TextEditor/TextEditor";
import { StringifyOptions } from "querystring";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

interface Post {
  email: string;
  question: string;
  type: string;
  tags: Array<string>;
  description: string;
  open: boolean;
}
export const PostForm = () => {
  const user = useAppSelector((state) => state.user.data);

  const [post, setPost] = React.useState<Post>({
    email: user.email,
    question: "",
    type: user.role === 1 ? "prep" : "bootcamp",
    tags: [],
    description: "",
    open: true,
  });

  const tags: Array<string> = [
    "JavaScript",
    "PostgreSQL",
    "Sequelize",
    "Nodejs",
    "Express",
    "React",
    "Redux",
    "CSS",
    "HTML",
    "SQL",
    "Modulo",
    "Otros",
  ];

  return (
    <Grid>
      <TextField
        required
        id="outlined-basic"
        label="question"
        variant="outlined"
      />

      <List>
        {tags.map((tag) => {
          return (
            <ListItem key={tag} secondaryAction={<Checkbox></Checkbox>}>
              <ListItemButton>
                <ListItemText primary={`${tag}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <TextField
        required
        id="filled-basic"
        label="Descripción"
        variant="filled"
      />
    </Grid>
  );
};
