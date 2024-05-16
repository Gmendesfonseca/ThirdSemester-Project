import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';

export function RegisterMenu() {
  const navigate = useNavigate();
  return (
    <>
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
      <Button
        onClick={() => navigate('/register/student')}
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
        Registrar Aluno
      </Button>
      <Button
        onClick={() => navigate('/register/professor')}
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
        Registrar Professor
      </Button>
    </>
  );
}
