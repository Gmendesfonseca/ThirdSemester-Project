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
import { FormProfessor } from '../Register/Register/FormProfessor';
import { FormStudent } from '../Register/Register/FormStudent';
import { InModalProps } from '../../interfaces/Modal';
import { FormBranch } from '../Register/Register/FormBranch';

const InModalEdit = ({ data, title, open, onClose }: InModalProps) => {
  const handleUpdate = () => {
    if (title === 'Aluno') updateStudent(data);
    else if (title === 'Professor') updateProfessor(data);
    else if (title === 'Unidade') updateBranch(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {title === 'Unidade' ? (
          <FormBranch disabled={false} data={data} />
        ) : title === 'Professor' ? (
          <FormProfessor /*disabled={disabled} data={data}*/ />
        ) : title === 'Aluno' ? (
          <FormStudent /*disabled={disabled} data={data}*/ />
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
        <Button onClick={handleUpdate}>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InModalEdit;
