import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FormProfessor } from '../Register/Register/FormProfessor';
import { FormStudent } from '../Register/Register/FormStudent';
import { FormBranch } from '../Register/Register/FormBranch';

const InModalView = (open, title) => {
  const handleClose = () => {
    open = false;
  };

  const handleRegister = () => {
    open = false;
  };

  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {title === 'Unidade' ? (
          <FormBranch disabled={false} data={null} />
        ) : title === 'Professor' ? (
          <FormProfessor disabled={false} data={null} />
        ) : title === 'Aluno' ? (
          <FormStudent disabled={false} data={null} />
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
        <Button onClick={handleRegister}>Cadastrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InModalView;
