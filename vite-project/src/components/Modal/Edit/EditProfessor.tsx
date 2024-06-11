import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { updateStudent } from '../../../services/student/request';
import { updateProfessor } from '../../../services/professor/request';
import { updateBranch } from '../../../services/branch/request';
import { FormProfessor } from '../../Forms/FormProfessor';

import { InModalProps } from '../../../interfaces/Modal';

import { useState } from 'react';

const InModalEditProfessor = ({
  actualData,
  title,
  open,
  onClose,
}: InModalProps) => {
  const [data, setData] = useState(actualData);
  const handleUpdate = () => {
    if (title === 'Aluno') updateStudent(data);
    else if (title === 'Professor') updateProfessor(data);
    else if (title === 'Unidade') updateBranch(data);
    onClose();
  };

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <FormProfessor
          disabled={false}
          data={data}
          onDataChange={handleDataChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
        <Button onClick={handleUpdate}>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InModalEditProfessor;
