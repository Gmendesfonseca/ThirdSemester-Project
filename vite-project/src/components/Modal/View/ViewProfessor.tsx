import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { InModalProps } from '../../../interfaces/Modal';
import { FormProfessor } from '../../Forms/FormProfessor';
import { useState } from 'react';
import { updateProfessor } from '../../../services/professor/request';

const InModalViewProfessor = ({
  actualData,
  title,
  open,
  onClose,
}: InModalProps) => {
  const [data, setData] = useState(actualData);
  const [disabled, setDisabled] = useState(true);

  const onEnable = () => {
    setDisabled(false);
  };

  const handleDataChange = (newData) => {
    setData(newData);
  };

  const handleUpdate = () => {
    updateProfessor(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <FormProfessor
          disabled={disabled}
          data={data}
          onDataChange={handleDataChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
        <Button onClick={onClose}>Fechar</Button>
        {disabled ? (
          <Button onClick={onEnable}>Editar</Button>
        ) : (
          <Button onClick={handleUpdate}>Confirmar</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default InModalViewProfessor;
