import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { deletePost } from '../../services/posts';

interface InModalDeleteProps {
  id: number;
  title: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const InModalDelete = ({
  id,
  title,
  open,
  onClose,
}: InModalDeleteProps) => {
  const handleConfirmDelete = () => {
    deletePost(id).then(() => {
      onClose();
    });
  };

  const handleCancelDelete = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <DialogTitle>{`Excluir ${title}`}</DialogTitle>
      <DialogContentText
        sx={{ textAlign: 'justify', padding: '0 24px' }}
      >{`Você tem certeza que deseja excluir esse ${title}? Cuidado, essa ação é irreversível`}</DialogContentText>
      <DialogActions>
        <Button color="info" onClick={handleCancelDelete}>
          Cancelar
        </Button>
        <Button color="error" onClick={handleConfirmDelete}>
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
};
