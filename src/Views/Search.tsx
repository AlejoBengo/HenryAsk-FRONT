import {
  Container,
  Paper,
  Tab,
  Tabs,
  Box,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import { useAppSelector } from "../app/hooks";
import React, { useState } from "react";
import { LinkDom } from "../Components/Style/StyledComponents";
import { Tag as TagIcon } from "@mui/icons-material";
import { UserShort } from "../Components/UserShort/UserShort";

interface tabPannelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}
function TabPanel(props: tabPannelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const Search = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { users, theorics, posts, exercises } = useAppSelector(
    (state) => state.search
  );
  const categories = ["users", "posts", "exercises", "theorics"];

  const changeTabIndex = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };
  function allyProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Container sx={{ pt: 1 }}>
      <Paper elevation={2} sx={{ p: 1 }}>
        <Typography variant="h3">Resultados de la búsqueda</Typography>
        <Box sx={{ borderBottom: "1px solid", borderBottomColor: "divider" }}>
          <Tabs onChange={changeTabIndex} value={tabIndex}>
            <Tab label="Usuarios" {...allyProps(0)}></Tab>
            <Tab label="Discusiones" {...allyProps(1)}></Tab>
            <Tab label="Ejercicios" {...allyProps(2)}></Tab>
            <Tab label="Contenido Teórico" {...allyProps(3)}></Tab>
          </Tabs>
        </Box>
        <TabPanel value={tabIndex} index={0}>
          {users.length ? (
            users.map((user, index) => {
              return (
                <Box key={user._id}>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                    }}
                  >
                    <LinkDom to={`/Profile/${user._id}`}>
                      <Avatar
                        src={
                          user?.profile_picture.length > 0
                            ? user.profile_picture
                            : user.avatar.length > 0
                            ? user.avatar
                            : user.profile_picture
                        }
                        sx={{
                          border: "1px solid",
                          borderColor: "primary.dark",
                          mr: 1,
                          zIndex: 2,
                          "&:before": {
                            content: "''",
                            width: "100%",
                            height: "100%",
                            display: "block",
                            position: "absolute",
                            backgroundColor: "primary.light",
                            zIndex: -1,
                          },
                        }}
                      />
                    </LinkDom>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "left",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <LinkDom to={`/Profile/${user._id}`}>
                        <Typography variant="body1">
                          {user.user_name}
                        </Typography>
                      </LinkDom>
                      <Typography variant="caption">
                        {` ${user.first_name} ${user.last_name}`}
                      </Typography>
                    </Box>
                  </Box>
                  {index < users.length - 1 ? <Divider /> : null}
                </Box>
              );
            })
          ) : (
            <Typography variant="body1">
              No se pudo encontrar ningún usuario
            </Typography>
          )}
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          {posts.length ? (
            posts.map((post, index) => {
              return (
                <Box key={post._id} sx={{ mt: 1 }}>
                  <LinkDom to={`/Post/${post._id}`}>
                    <Typography
                      variant="h5"
                      sx={{
                        textDecoration: "underline",
                        color: "primary.dark",
                      }}
                    >
                      {post.question}
                    </Typography>
                  </LinkDom>
                  <Typography variant="body2">
                    {post.description.split(" ").slice(0, 30).join(" ")}
                    {post.description.split("").length > 30 ? "..." : null}
                  </Typography>
                  <Typography
                    variant="caption"
                    display={"flex"}
                    alignItems="center"
                    sx={{ mt: 0.5 }}
                  >
                    <TagIcon /> {post.tags.join(",")}
                  </Typography>
                  {index < posts.length - 1 ? <Divider /> : null}
                </Box>
              );
            })
          ) : (
            <Typography variant="body1">
              No se pudo encontrar ninguna discusión
            </Typography>
          )}
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          {exercises.length ? (
            exercises.map((exercise, index) => {
              return (
                <Box key={exercise._id} sx={{ mt: 1 }}>
                  <LinkDom to={`/exercise/${exercise._id}`}>
                    <Typography
                      variant="h5"
                      sx={{
                        textDecoration: "underline",
                        color: "primary.dark",
                      }}
                    >
                      {exercise.title}
                    </Typography>
                  </LinkDom>
                  <Typography variant="body2">
                    {exercise.description.split(" ").slice(0, 30).join(" ")}
                    {exercise.description.split("").length > 30 ? "..." : null}
                  </Typography>
                  <Typography
                    variant="caption"
                    display={"flex"}
                    alignItems="center"
                    sx={{ mt: 0.5 }}
                  >
                    <TagIcon /> {exercise.tags.join(",")}
                  </Typography>
                  {index < exercises.length - 1 ? <Divider /> : null}
                </Box>
              );
            })
          ) : (
            <Typography variant="body1">
              No se pudo encontrar ningun ejercicio
            </Typography>
          )}
        </TabPanel>
        <TabPanel value={tabIndex} index={3}>
          {theorics.length ? (
            theorics.map((theoric, index) => {
              return (
                <Box key={theoric._id} sx={{ mt: 1 }}>
                  <LinkDom to={`/theoric/${theoric._id}`}>
                    <Typography
                      variant="h5"
                      sx={{
                        textDecoration: "underline",
                        color: "primary.dark",
                      }}
                    >
                      {theoric.title}
                    </Typography>
                  </LinkDom>
                  <Typography variant="body2">
                    {theoric.content.split(" ").slice(0, 30).join(" ")}
                    {theoric.content.split("").length > 30 ? "..." : null}
                  </Typography>
                  <Typography
                    variant="caption"
                    display={"flex"}
                    alignItems="center"
                    sx={{ mt: 0.5 }}
                  >
                    <TagIcon /> {theoric.comments.join(",")}
                  </Typography>
                  {index < theorics.length - 1 ? <Divider /> : null}
                </Box>
              );
            })
          ) : (
            <Typography variant="body1">
              No se pudo encontrar contenido teórico
            </Typography>
          )}
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Search;
