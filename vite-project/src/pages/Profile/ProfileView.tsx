import { Box, Container, Divider } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Post } from '../../components/HomeComponents/Post/Post';
import { useState } from 'react';

export default function Profile() {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Add null check for event.target.files

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string); // Cast reader.result to string
      };

      reader.readAsDataURL(file);
    }
  };

  const [image, setImage] = useState('');
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Container sx={{ paddingTop: 2 }}>
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
      </Container>
      <Stack
        direction="column"
        spacing={2}
        width="100%"
        alignItems="center"
        paddingTop="3rem"
      >
        <Avatar
          sx={{ width: 150, height: 150 }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <label>Nome</label>
        <Divider sx={{ width: '50%' }} />
        <label>Instituição</label>
        <Divider sx={{ width: '50%' }} />
        <label>Curso</label>
        <Divider sx={{ width: '50%' }} />
      </Stack>
      {/* <Stack direction='row' justifyContent='space-evenly' width='100%' spacing={5} marginTop={5}>
      <Container sx={{width:'15rem', height:'8rem', backgroundColor:'grey'}}></Container>
      <Container sx={{width:'15rem', height:'8rem', backgroundColor:'grey'}}></Container>
      <Container sx={{width:'15rem', height:'8rem', backgroundColor:'grey'}}></Container>
      <Container sx={{width:'15rem', height:'8rem', backgroundColor:'grey'}}></Container>
    </Stack> */}
      <input
        title="input-image"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <Post
        data={{
          creatorId: 0,
          title: 'banana nanica',
          subheader: '',
          likes: 0,
          comments: [{ id: '0', text: 'comentário', creatorId: 0 }],
          description: 'sim',
          image: image,
        }}
        // onImageUpload={handleImageUpload}
      />
    </Box>
  );
}
