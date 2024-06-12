import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  InputBase,
  Modal,
  Stack,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Add as AddIcon, Close, Image, Videocam } from '@mui/icons-material';
import { Box } from '@mui/system';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});
export const Add2 = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip
        onClick={handleClickOpen}
        title="Add Post"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 30,
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog open={open} onClose={handleModalClose} fullWidth maxWidth="sm">
          <DialogTitle component="div">
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={0.5} alignItems="center">
                <UserBox>
                  <Avatar
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    sx={{ width: 30, height: 30 }}
                  />
                  <Stack direction="column" spacing={0.5}>
                    <Typography fontWeight={500}>John Doe</Typography>
                  </Stack>
                </UserBox>
              </Stack>
              <div>
                <IconButton onClick={handleModalClose}>
                  <Close />
                </IconButton>
              </div>
            </Stack>
          </DialogTitle>
          <DialogContent
            sx={{ display: 'flex', flexDirection: 'column', gap: '8px', py: 0 }}
          >
            <Box
              sx={{
                borderTop: '1px solid #ECECEC',
                paddingTop: '8px',
                width: '100%',
              }}
            >
              <InputBase
                placeholder="Compartilhe algo de interessante com suas conexões"
                fullWidth
                multiline
                minRows={6}
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ px: 3 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                borderTop: '1px solid #ECECEC',
                paddingTop: '8px',
                width: '100%',
              }}
            >
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <IconButton sx={{ p: 0, borderRadius: '2px' }}>
                  <Image sx={{ fontSize: '22px' }} />
                </IconButton>
                <IconButton sx={{ p: 0, borderRadius: '2px' }}>
                  <Videocam sx={{ fontSize: '24px' }} />
                </IconButton>
              </Stack>
              <Button variant="contained">Publicar agora</Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </StyledModal>
    </>
  );
};
