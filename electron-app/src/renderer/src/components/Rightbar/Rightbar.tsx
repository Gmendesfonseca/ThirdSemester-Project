import React from 'react'
import { Box } from '@mui/system'
import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'
import faker from 'faker'

const listItems = Array.from({ length: 3 }, () => ({
  avatar: faker.image.avatar(),
  name: faker.name.findName(),
  primary: faker.lorem.sentence(),
  secondary: faker.lorem.sentences(2)
}))

const avatars = Array.from({ length: 8 }, () => ({
  name: faker.name.findName(),
  avatar: faker.image.avatar()
}))
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8} sx={{ justifyContent: 'start' }}>
          {avatars.map((avatar, index) => (
            <Avatar key={index} alt={avatar.name} src={avatar.avatar} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {listItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.name}
                      </Typography>
                      {` — ${item.secondary}`}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  )
}
