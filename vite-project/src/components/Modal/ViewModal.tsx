import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FormProfessor } from '../Register/Register/FormProfessor';
import { FormStudent } from '../Register/Register/FormStudent';
import { InModalProps } from '../../interfaces/Modal';
import { FormBranch } from '../Register/Register/FormBranch';
import { useState } from 'react';

const InModalView = ({ data, title, open, onClose }: InModalProps) => {
  const [disabled, setDisabled] = useState(true);
  const navigate = (path: string) => {
    window.location.pathname = path;
  };
  const onEnable = () => {
    navigate('/branch/edit');
    setDisabled(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {title === 'Unidade' ? (
          <FormBranch disabled={disabled} data={data} />
        ) : title === 'Professor' ? (
          <FormProfessor /*disabled={disabled} data={data}*/ />
        ) : title === 'Aluno' ? (
          <FormStudent /*disabled={disabled} data={data}*/ />
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
        <Button onClick={onEnable}>Editar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InModalView;
