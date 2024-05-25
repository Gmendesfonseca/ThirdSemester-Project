import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { updateStudent } from '../../services/lists/student/request';
import { updateProfessor } from '../../services/lists/professor/request';
import { updateBranch } from '../../services/lists/branch/request';
import { FormBranch } from '../Register/Register/FormBranch';
import { FormProfessor } from '../Register/Register/FormProfessor';
import { FormStudent } from '../Register/Register/FormStudent';

interface InModalProps {
  data: any;
  title: string;
  open: boolean;
  disabled?: boolean;
}

const InModalView = ({ data, title, open, disabled }: InModalProps) => {
  const handleClose = () => {
    open = false;
  };

  const handleEnable = () => {
    disabled = false;
  };

  const handleUpdate = () => {
    if (title === 'Aluno') updateStudent(data);
    else if (title === 'Professor') updateProfessor(data);
    else if (title === 'Unidade') updateBranch(data);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {title === 'Unidade' ? (
          <FormBranch /*disabled={disabled} data={data}*/ />
        ) : title === 'Professor' ? (
          <FormProfessor /*disabled={disabled} data={data}*/ />
        ) : title === 'Aluno' ? (
          <FormStudent /*disabled={disabled} data={data}*/ />
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
        {disabled ? (
          <Button onClick={handleEnable}>Editar</Button>
        ) : (
          <Button onClick={handleUpdate}>Confirmar</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default InModalView;
