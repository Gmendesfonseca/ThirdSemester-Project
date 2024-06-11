import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { InModalProps } from '../../../interfaces/Modal';
import { FormStudent } from '../../Forms/FormStudent';
import { useState } from 'react';
import { updateStudent } from '../../../services/student/request';

const InModalViewStudent = ({
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
    updateStudent(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <FormStudent
          disabled={disabled}
          data={data}
          onDataChange={handleDataChange}
        />
      </DialogContent>
      <DialogActions>
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

export default InModalViewStudent;
