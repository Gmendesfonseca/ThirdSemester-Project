import { Box, Container, Divider } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Profile() {
  const navigate = useNavigate();

  return <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100wh', backgroundColor: '#f0f0f0' }}>
    <Container sx={{ paddingTop: 2 }}>
      <label onClick={() => navigate('/home')} style={{ color: blue[900], textDecoration: 'underline' }}>Página Inicial</label>
    </Container>
    <Stack direction="column" spacing={2} width='100%' alignItems='center' paddingTop='5rem'>
      <Avatar sx={{width:150, height:150}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
      <label>Nome</label>
      <Divider />
      <label>Instituição</label>
      <Divider />
      <label>Curso</label>
    </Stack>
  </Box>;
}
