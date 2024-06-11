import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { updateBranch } from '../../../services/branch/request';

import { InModalProps } from '../../../interfaces/Modal';
import { FormBranch } from '../../Forms/FormBranch';
import { useState } from 'react';

const InModalEditBranch = ({
  actualData,
  title,
  open,
  onClose,
}: InModalProps) => {
  const [data, setData] = useState(actualData);
  const handleUpdate = () => {
    updateBranch(data);
    onClose();
  };

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
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
        <Button onClick={handleUpdate}>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InModalEditBranch;
