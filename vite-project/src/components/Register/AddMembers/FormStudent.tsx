import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';

export function RegisterStudent() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/register')}
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
