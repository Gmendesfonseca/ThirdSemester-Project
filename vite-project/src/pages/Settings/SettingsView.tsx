import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export function Settings() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/home')}
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
      Página Inicial
    </Button>
  );
}
