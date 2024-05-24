import { Avatar, Badge, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AvatarType } from '../../../services/avatar/type';
import { FriendsType } from '../../../services/friends';

interface AvatarProps {
  data: AvatarType;
}
interface FriendsProps {
  data: FriendsType;
}

export const OnlineBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const OfflineBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#808080', // gray color
    color: '#808080',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const OnlineAvatar = ({ data }: AvatarProps) => {
  return (
    <Box>
      <OnlineBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt={data.name} src={data.src} />
      </OnlineBadge>
    </Box>
  );
};

export const OfflineAvatar = ({ data }: AvatarProps) => {
  return (
    <Box>
      <OfflineBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt={data.name} src={data.src} />
      </OfflineBadge>
    </Box>
  );
};

export const AvatarComponent = ({ data }: FriendsProps) => {
  return data.online ? (
    <OnlineAvatar data={data} />
  ) : (
    <OfflineAvatar data={data} />
  );
};
