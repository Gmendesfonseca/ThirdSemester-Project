import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FormProfessor } from '../../Forms/FormProfessor';
import { RegisterProfessorParams } from '../../../services/register';
import { useState } from 'react';
import { registerProfessor } from '../../../services/lists/professor/request';

const InModalRegisterProfessor = ({ title, opened, onClose }) => {
  const [data, setData] = useState<RegisterProfessorParams>();

  const handleRegister = () => {
    registerProfessor(data);
    if (onClose) {
      onClose();
    }
  };

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <Dialog open={opened} onClose={onClose}>
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
        <Button onClick={handleRegister}>Cadastrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InModalRegisterProfessor;
