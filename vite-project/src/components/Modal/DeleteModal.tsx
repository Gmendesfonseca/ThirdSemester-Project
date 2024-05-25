import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { deleteBranch } from '../../services/lists/branch/request';
import { deleteProfessor } from '../../services/lists/professor/request';
import { deleteStudent } from '../../services/lists/student/request';
import React from 'react';

interface InModalProps {
  id: number;
  title: string;
  open: boolean;
}

const InModalDelete = ({ id, title, open }: InModalProps) => {
  const [openDelete, setOpen] = React.useState(false);

  const handleConfirmDelete = () => {
    if (title === 'Aluno') deleteStudent(id);
    else if (title === 'Professor') deleteProfessor(id);
    else if (title === 'Unidade') deleteBranch(id);
    setOpen(false);
  };

  const handleCancelDelete = () => {
    setOpen(false);
  };

  openDelete !== open && setOpen(open);

  return (
    <Dialog open={openDelete} onClose={setOpen}>
      <DialogTitle>{`Excluir ${title}`}</DialogTitle>
      <DialogContentText>{`Você tem certeza que deseja excluir esse ${title}? Cuidado, essa ação é irreversível`}</DialogContentText>
      <DialogActions>
        <Button onClick={handleConfirmDelete}>Excluir</Button>
        <Button onClick={handleCancelDelete}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
};
export default InModalDelete;
