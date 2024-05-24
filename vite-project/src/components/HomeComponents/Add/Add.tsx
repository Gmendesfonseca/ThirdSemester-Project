import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
export const Add = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  function onImageUpload(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file) {
      // Perform any necessary operations with the uploaded file
      console.log("File uploaded:", file);
    }
  }

  return (
    <>
      <Tooltip
        onClick={handleClickOpen}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: 30,
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Criar Nova Publicação
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Compartilhe suas experiências..."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <Button component="label">
              <EmojiEmotions color="primary" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={onImageUpload}
              />
            </Button>

            <Button component="label">
              <Image color="secondary" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={onImageUpload}
              />
            </Button>
            <Button component="label">
              <VideoCameraBack color="success" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={onImageUpload}
              />
            </Button>
            <Button component="label">
              <PersonAdd color="error" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={onImageUpload}
              />
            </Button>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
