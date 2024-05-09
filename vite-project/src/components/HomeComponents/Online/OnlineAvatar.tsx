import { Avatar } from '@mui/material';
import { OfflineBadge, OnlineBadge } from './StyledBadge';

export const OnlineAvatar = ({ name, src }, online: boolean) => {
  if (online) {
    return (
      <OnlineBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt={name} src={src} />
      </OnlineBadge>
    );
  } else {
    <OfflineBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar alt={name} src={src} />
    </OfflineBadge>;
  }
};
