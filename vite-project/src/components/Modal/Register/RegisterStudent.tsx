import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FormStudent } from '../../Forms/FormStudent';
import { RegisterStudentParams } from '../../../services/register';
import { useState } from 'react';
import { registerStudent } from '../../../services/student/request';

const InModalRegisterStudent = ({ title, opened, onClose }) => {
  const [data, setData] = useState<RegisterStudentParams>();

  const handleRegister = () => {
    registerStudent(data);
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
        <FormStudent
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

export default InModalRegisterStudent;
