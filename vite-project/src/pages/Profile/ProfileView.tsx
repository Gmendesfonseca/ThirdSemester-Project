// import { useNavigate } from "react-router-dom";
import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';
import ProfileCard from './ProfileCard';
import img from './profileAvatar.png';
import { useNavigate } from 'react-router-dom';
import { darkTheme } from '../../Theme';
import { Box, ThemeProvider } from '@mui/material';

// import { useState } from 'react';

export default function Profile() {
  // const [image, setImage] = useState('');
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const btnBackHome = (
    <button title="back" className="backHome" onClick={() => navigate('/home')}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5"
      >
        <path
          fillRule="evenodd"
          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className="profilePage"
        bgcolor={'background.default'}
        sx={{
          overflow: 'hidden',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none' /* IE and Edge */,
          scrollbarWidth: 'none' /* Firefox */,
        }}
      >
        <Navbar navAct={btnBackHome} />

        <ProfileCard
          name="Elon Musk"
          description="O empresário Elon Musk é fundador e CEO da empresa de foguetes SpaceX; CEO da marca de carros elétricos Tesla; fundador e CEO da Neuralink (que implantou um chip no cérebro de humanos)..."
          avatar={img}
          email={'jonas_jm@live.com'}
        />
      </Box>
    </ThemeProvider>
  );
}
