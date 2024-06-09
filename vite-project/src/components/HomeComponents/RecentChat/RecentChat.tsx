import {
  Box,
  Container,
  Divider,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { RecentChatType } from "../../../services/chats";
import { AvatarComponent } from "../Avatar/Avatar";
import { FriendsType } from "../../../services/friends";
import styles from "./styles.module.css";

interface RecentChatProps {
  id: number;
  data: RecentChatType;
  avatar: FriendsType;
}

export function RecentChat({ id, data, avatar }: RecentChatProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <AvatarComponent data={avatar} />
        <ListItemText
          className={styles.parent}
          sx={{ paddingX: "10px" }}
          id={"chat-" + id}
          primary={data.name}
          secondary={
            <React.Fragment>
              <Typography
                className={styles.title}
                component="p"
                variant="body2"
                color="white"
              >
                {data.message}
              </Typography>
            </React.Fragment>
          }
        />
      </Container>
      <Divider />
    </Box>
  );
}
