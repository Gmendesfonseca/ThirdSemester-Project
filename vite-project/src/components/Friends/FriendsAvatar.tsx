import { OfflineAvatar, OnlineAvatar } from '../HomeComponents/Online/Avatar';
import { AvatarType } from '../../services/avatar/type';

interfac../HomeComponents/Avat/StyledBadge
  data: AvatarType;
}

export const FriendsAvatar = ({ data }: FriendsProps, online) => {
  if (online) {
    return <OnlineAvatar data={data} />;
  } else {
    return <OfflineAvatar data={data} />;
  }
};
