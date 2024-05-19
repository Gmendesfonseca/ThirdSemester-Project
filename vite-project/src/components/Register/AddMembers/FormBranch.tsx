import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export function RegisterBranch() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/branch/list')}
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
