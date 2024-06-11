import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FormBranch } from '../../Forms/FormBranch';
import { RegisterBranchParams } from '../../../services/register';
import { useState } from 'react';
import { registerBranch } from '../../../services/branch/request';

const InModalRegisterBranch = ({ title, opened, onClose }) => {
  const [data, setData] = useState<RegisterBranchParams>();

  const handleRegister = () => {
    registerBranch(data);
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
        <FormBranch
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

export default InModalRegisterBranch;
