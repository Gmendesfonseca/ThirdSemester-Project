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
import { ChangeEvent, useState } from 'react';
import { Add as AddIcon, Close, Image } from '@mui/icons-material';
import { Box } from '@mui/system';
import './Add.css';
import {
  createPostProfessor,
  createPostStudent,
  PostType,
} from '../../../services/posts';
import { useSession } from '../../../context/SessionContext';
import { AccountType } from '../../../services/login/enum';

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
  const { user, accountType } = useSession();
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string | ArrayBuffer | null>();
  const [description, setDescription] = useState<string>('');
  const institutionId = user?.institutionId;
  const creatorId = user?.id;
  const creatorName = user?.name;

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleCreatePost = async () => {
    if (accountType === AccountType.PROFESSOR) {
      const data: PostType = await createPostProfessor({
        institutionId,
        creatorId,
        creatorName,
        title,
        image,
        description,
      });
      user?.posts.push(data);
    } else if (accountType === AccountType.STUDENT) {
      const data = await createPostStudent({
        institutionId,
        creatorId,
        creatorName,
        title,
        image,
        description,
      });
      user?.posts.push(data);
    }
    handleModalClose();
  };

  function handleOpenButtonClicked(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        function () {
          setImage(reader.result);
        },
        false,
      );

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  // function handlePostClick() {
  //   if (image) {
  //     createPost({ image, description, title }).then(
  //       (data) => {
  //         if (user) {
  //           user.posts.push(data);
  //         }
  //         handleModalClose();
  //       },
  //     );
  //   } else {
  //     console.error('Nenhuma imagem selecionada para a postagem');
  //   }
  // }

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
                    src={
                      user
                        ? user.avatar
                        : 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    }
                    sx={{ width: 30, height: 30 }}
                  />
                  <Stack direction="column" spacing={0.5}>
                    <Typography fontWeight={500}>
                      {user ? user.name : 'Nome do Usuário'}
                    </Typography>
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
            <Box>
              <InputBase
                placeholder="Insira o título do seu post aqui"
                fullWidth
                multiline
                minRows={1}
                onChange={handleTitleChange}
              />
            </Box>
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
                onChange={handleDescriptionChange}
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
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                width="100%"
              >
                <div className="__itens__icons__photo">
                  <label htmlFor="postType_img">
                    <Image />
                  </label>
                  <input
                    id="postType_img"
                    type="file"
                    multiple
                    accept=".png, .jpg, .jpeg"
                    onChange={handleOpenButtonClicked}
                  />
                  <Button
                    variant="contained"
                    onClick={handleCreatePost}
                    className="btnCreatePost"
                  >
                    Publicar agora
                  </Button>
                </div>
              </Stack>
            </Stack>
          </DialogActions>
        </Dialog>
      </StyledModal>
    </>
  );
};
