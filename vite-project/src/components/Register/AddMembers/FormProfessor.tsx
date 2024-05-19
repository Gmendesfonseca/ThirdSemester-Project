import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';

export function RegisterProfessor() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/professor/list')}
      style={{ color: blue[500] }}
      onMouseOver={(event) => {
        event.currentTarget.style.color = blue[900];
        event.currentTarget.style.textDecoration = 'underline';
      }}
      onMouseOut={(event) => {
        event.currentTarget.style.color = blue[500];
        event.currentTarget.style.textDecoration = 'none';
      }}
    >
      Menu de Registro
    </Button>
  );
}
